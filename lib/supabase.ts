import { createClient } from '@supabase/supabase-js';

// Accessing environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
// We use the service role key strictly on the server (API Routes) to bypass RLS for inserting raw website bookings
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseKey);
