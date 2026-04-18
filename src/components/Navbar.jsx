import React, { useState, useEffect } from 'react';

const Navbar = ({ onGoHome }) => {
  const AMARELO = "#D4AF37"; 
  const PRETO = "#000000";

  // Hook para detectar mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="pb-navbar" style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      padding: isMobile ? '0 15px' : '0 40px', // Padding menor no mobile
      height: '80px',
      position: 'relative',
      background: 'rgba(0,0,0,0.9)', 
      borderBottom: `1px solid ${AMARELO}33`,
      zIndex: 1000
    }}>
      
      {/* LADO ESQUERDO: LOGO */}
      <div className="pb-brand" style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '8px' : '12px' }}>
        <div className="pb-logo-wrap">
          <div className="pb-logo" style={{
            width: isMobile ? '32px' : '40px', // Logo menor no mobile
            height: isMobile ? '32px' : '40px',
            border: `1px solid ${AMARELO}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span className="pb-logo-text" style={{ color: AMARELO, fontWeight: 'bold', fontSize: isMobile ? '12px' : '14px' }}>PB</span>
          </div>
        </div>
        <div className="pb-brand-name" style={{ display: 'flex', flexDirection: 'column', lineHeight: '1' }}>
          <span style={{ color: 'white', fontSize: isMobile ? '14px' : '18px', fontWeight: 'bold', letterSpacing: '1px' }}>Palheta</span>
          <span style={{ color: AMARELO, fontSize: isMobile ? '8px' : '10px', textTransform: 'uppercase', letterSpacing: '2px' }}>Barbearia</span>
        </div>
      </div>

      {/* CENTRO: TÍTULO DESTAQUE (Oculto em telas muito pequenas para não encavalar) */}
      {!isMobile && (
        <div style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          pointerEvents: 'none'
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
      )}

      {/* LADO DIREITO: BOTÃO VOLTAR */}
      <div style={{ zIndex: 10 }}>
        <button 
          onClick={() => {
            if (onGoHome) onGoHome();
          }} 
          className="pb-nav-link"
          style={{ 
            color: AMARELO, 
            fontWeight: 'bold',
            border: `1px solid ${AMARELO}`,
            padding: isMobile ? '6px 12px' : '8px 20px', // Botão menor no mobile
            background: 'transparent',
            cursor: 'pointer',
            fontSize: isMobile ? '9px' : '10px',
            letterSpacing: '1px',
            transition: 'all 0.3s ease',
            whiteSpace: 'nowrap'
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
          {isMobile ? '← VOLTAR' : '← VOLTAR PARA HOME'} 
        </button>
      </div>
    </nav>
  );
};

export default Navbar;