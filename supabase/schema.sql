-- CoreCraft Supabase schema
-- Run in the Supabase SQL editor (or via supabase CLI migrations) when the
-- project is created. Tables are written to by server-side code only
-- (admin client); RLS blocks all anonymous/public access by default.

-- Contact form submissions (/api/contact)
create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  topic text,
  message text not null,
  status text not null default 'new'
    check (status in ('new', 'contacted', 'closed'))
);

alter table public.contact_submissions enable row level security;

-- Enrollment / lead tracking (course interest, intro calls, waitlists)
create table if not exists public.enrollment_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  course_slug text,
  service text not null default 'undecided'
    check (service in ('private-mentorship', 'private-course', 'group-course', 'undecided')),
  preferred_language text
    check (preferred_language in ('arabic', 'english', 'either')),
  notes text,
  status text not null default 'new'
    check (status in ('new', 'intro-call-booked', 'enrolled', 'closed'))
);

alter table public.enrollment_leads enable row level security;

-- No public policies on purpose: inserts/reads go through the service-role
-- key on the server. When auth lands in v2, add scoped policies here.

create index if not exists contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);

create index if not exists enrollment_leads_created_at_idx
  on public.enrollment_leads (created_at desc);

create index if not exists enrollment_leads_course_slug_idx
  on public.enrollment_leads (course_slug);
