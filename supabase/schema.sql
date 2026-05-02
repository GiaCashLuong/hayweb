-- HAYWEB Database Schema
-- Run in Supabase SQL Editor

-- === hw_projects ===
CREATE TABLE IF NOT EXISTS hw_projects (
  id                uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id           uuid REFERENCES auth.users NOT NULL,
  project_name      text,
  brief             jsonb,
  quote             jsonb,
  signature_data    text,
  status            text DEFAULT 'pending' CHECK (status IN ('pending','signed','paid')),
  payment_method    text,
  stripe_session_id text,
  payos_order_code  text,
  amount_vnd        integer,
  amount_usd        numeric(10,2),
  created_at        timestamptz DEFAULT now(),
  updated_at        timestamptz DEFAULT now()
);

-- RLS
ALTER TABLE hw_projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own projects" ON hw_projects
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own projects" ON hw_projects
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own projects" ON hw_projects
  FOR UPDATE USING (auth.uid() = user_id);

-- Service role bypass (for Edge Functions)
CREATE POLICY "Service role full access" ON hw_projects
  USING (auth.jwt() ->> 'role' = 'service_role');

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER hw_projects_updated_at
  BEFORE UPDATE ON hw_projects
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- === hw_contact_messages ===
CREATE TABLE IF NOT EXISTS hw_contact_messages (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name       text NOT NULL,
  email      text NOT NULL,
  phone      text,
  message    text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE hw_contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert contact messages" ON hw_contact_messages
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Only service role can read contact messages" ON hw_contact_messages
  FOR SELECT USING (auth.jwt() ->> 'role' = 'service_role');

-- Index for performance
CREATE INDEX IF NOT EXISTS hw_projects_user_id_idx ON hw_projects (user_id);
CREATE INDEX IF NOT EXISTS hw_projects_status_idx  ON hw_projects (status);
CREATE INDEX IF NOT EXISTS hw_projects_created_idx ON hw_projects (created_at DESC);

-- === hw_consultations ===
-- Daily-limited free consultation slots (5/day) + waitlist overflow.
-- Used by hw-consultation-slots (count) + hw-consultation-book (insert).
CREATE TABLE IF NOT EXISTS hw_consultations (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name         text NOT NULL,
  email        text NOT NULL,
  phone        text,
  source       text,                                  -- 'cta_band' | 'contact' | 'sticky_bar'
  status       text DEFAULT 'booked' CHECK (status IN ('booked','waitlist','contacted','done','cancelled')),
  slot_date    date NOT NULL DEFAULT (now() AT TIME ZONE 'Asia/Ho_Chi_Minh')::date,
  notes        text,
  created_at   timestamptz DEFAULT now()
);

ALTER TABLE hw_consultations ENABLE ROW LEVEL SECURITY;

-- Anon can ONLY insert (not read). Slot count comes via Edge Function with service_role.
CREATE POLICY "Anyone can book a consultation" ON hw_consultations
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Only service role can read consultations" ON hw_consultations
  FOR SELECT USING (auth.jwt() ->> 'role' = 'service_role');

CREATE INDEX IF NOT EXISTS hw_consultations_slot_date_idx
  ON hw_consultations (slot_date);
CREATE INDEX IF NOT EXISTS hw_consultations_status_idx
  ON hw_consultations (status);
