import React from 'react';

const Navbar = ({ onGoHome }) => {
  // Cores de segurança caso o CSS global falhe
  const AMARELO = "#D4AF37"; 
  const PRETO = "#000000";

  return (
    <nav className="pb-navbar" style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      padding: '0 40px',
      height: '80px',
      position: 'relative',
      background: 'rgba(0,0,0,0.9)', // Fundo semi-transparente de segurança
      borderBottom: `1px solid ${AMARELO}33` // Borda sutil
    }}>
      
      {/* LADO ESQUERDO: LOGO */}
      <div className="pb-brand" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div className="pb-logo-wrap">
          <div className="pb-logo" style={{
            width: '40px',
            height: '40px',
            border: `1px solid ${AMARELO}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span className="pb-logo-text" style={{ color: AMARELO, fontWeight: 'bold' }}>PB</span>
          </div>
        </div>
        <div className="pb-brand-name" style={{ display: 'flex', flexDirection: 'column', lineHeight: '1' }}>
          <span style={{ color: 'white', fontSize: '18px', fontWeight: 'bold', letterSpacing: '1px' }}>Palheta</span>
          <span style={{ color: AMARELO, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px' }}>Barbearia</span>
        </div>
      </div>

      {/* CENTRO: TÍTULO DESTAQUE */}
      <div style={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        pointerEvents: 'none' // Não atrapalha cliques próximos
      }}>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          color: AMARELO,
          fontSize: '18px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          margin: 0,
          fontWeight: '700',
          whiteSpace: 'nowrap'
        }}>
          Agendamento
        </h2>
      </div>

      {/* LADO DIREITO: BOTÃO VOLTAR */}
      <div style={{ zIndex: 10 }}>
        <button 
          onClick={() => {
            console.log("Voltando para Home...");
            if (onGoHome) onGoHome();
          }} 
          className="pb-nav-link"
          style={{ 
            color: AMARELO, 
            fontWeight: 'bold',
            border: `1px solid ${AMARELO}`,
            padding: '8px 20px',
            background: 'transparent',
            cursor: 'pointer',
            fontSize: '10px',
            letterSpacing: '1px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = AMARELO;
            e.currentTarget.style.color = PRETO;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = AMARELO;
          }}
        >
          ← VOLTAR 
        </button>
      </div>
    </nav>
  );
};

export default Navbar;