import { createClient } from '@supabase/supabase-js';

const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xc3Jiam13bnBkYmpqaGtnaXZrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1Nzc5OTExOCwiZXhwIjoxOTczMzc1MTE4fQ.3WyrE2n1WSQHHo2P7mY-13yj5b3Y7f4UZpYc_mDsl0I';
const SUPABASE_URL = 'https://mqsrbjmwnpdbjjhkgivk.supabase.co';

const useSupabase = () => {
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

  return {
    supabase,
  };
};

export default useSupabase;
