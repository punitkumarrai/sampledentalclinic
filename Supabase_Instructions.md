# Supabase Integration Guide

The application has been successfully wired up to send booking requests to Supabase. To complete the connection, you must manually execute the following two steps.

## Step 1: Create the Database Table

Open your Supabase project dashboard, navigate to the **SQL Editor**, and paste the following query to create the requests table:

```sql
create table public.appointment_requests (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  full_name text not null,
  phone text not null,
  treatment_needed text,
  preferred_date date not null,
  preferred_time text,
  status text default 'new' not null,
  source text default 'website' not null,
  notes text
);

-- Optional: Enable Row Level Security (RLS) but leave it locked down.
-- Our backend API uses the Service Role Key to securely insert data,
-- so no public INSERT policies are required!
alter table public.appointment_requests enable row level security;
```

## Step 2: Configure Environment Variables

Create a file named `.env.local` in the root folder of your project (`c:\sample dental clinic\.env.local`) and add your Supabase credentials:

```bash
# Found in Project Settings -> API -> Project URL
NEXT_PUBLIC_SUPABASE_URL=your-project-url-here

# Found in Project Settings -> API -> Project API Keys (service_role secret)
SUPABASE_SERVICE_ROLE_KEY=your-service-role-secret-key-here
```

> **Security Note:** We are using the `SUPABASE_SERVICE_ROLE_KEY` inside a secure Next.js Server API Route (`app/api/book/route.ts`). This ensures your database cannot be spammed directly from the client side without passing through our server validation, while still allowing the server to bypass RLS to insert new bookings securely.
