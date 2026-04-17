import React, { useState } from 'react';
import { Lock, User, Scissors, Loader2 } from 'lucide-react';
import { supabase } from '../supabaseClient'; // Importe seu cliente configurado

export default function BarbeiroLogin({ onLogin, onGoHome }) {
  const [email, setEmail] = useState(''); // O Supabase usa e-mail por padrão
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Chamada oficial de autenticação do Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: pass,
    });

    if (error) {
      alert("Erro ao entrar: " + error.message);
      setLoading(false);
    } else if (data.user) {
      onLogin(); // Sucesso!
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#000',
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url("https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop")',
      backgroundSize: 'cover'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        padding: '40px',
        background: 'rgba(20, 20, 20, 0.95)',
        border: '1px solid var(--amarelo)',
        textAlign: 'center'
      }}>
        <Scissors color="var(--amarelo)" size={40} style={{ marginBottom: '20px' }} />
        <h2 style={{ color: 'white', fontFamily: 'Cormorant Garamond', fontSize: '30px', marginBottom: '30px' }}>
          Acesso do Barbeiro
        </h2>

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '20px', textAlign: 'left' }}>
            <label style={{ color: 'var(--amarelo)', fontSize: '12px', display: 'block', marginBottom: '5px' }}>E-MAIL</label>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #333', padding: '10px' }}>
              <User size={18} color="#666" />
              <input 
                type="email" 
                placeholder="barbeiro@exemplo.com"
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ background: 'transparent', border: 'none', color: 'white', marginLeft: '10px', outline: 'none', width: '100%' }} 
              />
            </div>
          </div>

          <div style={{ marginBottom: '30px', textAlign: 'left' }}>
            <label style={{ color: 'var(--amarelo)', fontSize: '12px', display: 'block', marginBottom: '5px' }}>SENHA</label>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #333', padding: '10px' }}>
              <Lock size={18} color="#666" />
              <input 
                type="password" 
                placeholder="••••••••"
                value={pass} 
                onChange={(e) => setPass(e.target.value)}
                required
                style={{ background: 'transparent', border: 'none', color: 'white', marginLeft: '10px', outline: 'none', width: '100%' }} 
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            style={{
              width: '100%',
              padding: '15px',
              background: 'var(--amarelo)',
              color: 'black',
              fontWeight: 'bold',
              border: 'none',
              cursor: loading ? 'not-allowed' : 'pointer',
              marginBottom: '15px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px'
            }}
          > 
            {loading ? <Loader2 className="animate-spin" size={20} /> : "ENTRAR NO PAINEL"} 
          </button>
        </form>
        
        <button onClick={onGoHome} style={{ background: 'transparent', border: 'none', color: '#666', cursor: 'pointer', fontSize: '12px' }}>
          Voltar para o site
        </button>
      </div>
    </div>
  );
}