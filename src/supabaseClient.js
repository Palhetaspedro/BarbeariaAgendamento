import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

// Verificação de segurança para não dar erro no console se esquecer o .env
if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Erro: As chaves do Supabase não foram encontradas no arquivo .env");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)