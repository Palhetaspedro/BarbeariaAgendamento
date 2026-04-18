import { createClient } from '@supabase/supabase-js'

// No Vite, usamos import.meta.env em vez de process.env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Erro: As chaves VITE_SUPABASE_URL ou VITE_SUPABASE_ANON_KEY não foram encontradas.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)