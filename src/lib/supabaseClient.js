import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://isgyxpefhwdcibdxyvuk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzZ3l4cGVmaHdkY2liZHh5dnVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM5NTkyMDIsImV4cCI6MjA1OTUzNTIwMn0.u2srWLw6Nf-C4ePR8M3SCNdHJZ42QLv66QX_OcbdEjc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
