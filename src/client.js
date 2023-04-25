import { createClient } from '@supabase/supabase-js'

const URL = 'https://qgvhqtaferwarqaltdbw.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFndmhxdGFmZXJ3YXJxYWx0ZGJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIzODk5NzAsImV4cCI6MTk5Nzk2NTk3MH0.PSMXNvYpwBnA2Wk9pBHBsCS4gfj0g76gXA6owzqbswQ';

export const supabase = createClient(URL, API_KEY);