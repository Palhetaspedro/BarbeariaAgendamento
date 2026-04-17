import React from 'react';

const Navbar = ({ onGoHome }) => {
  return (
    <nav className="pb-navbar" style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      padding: '0 40px',
      height: '80px',
      position: 'relative'
    }}>
      
      {/* LADO ESQUERDO: LOGO */}
      <div className="pb-brand">
        <div className="pb-logo-wrap">
          <div className="pb-logo">
            <span className="pb-logo-text">PB</span>
          </div>
        </div>
        <div className="pb-brand-name">
          <span>Palheta</span>
          <span>Barbearia</span>
        </div>
      </div>

      {/* CENTRO: TÍTULO DESTAQUE */}
      <div style={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'auto',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          color: 'var(--amarelo)',
          fontSize: '20px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          margin: 0,
          fontWeight: '700',
          whiteSpace: 'nowrap'
        }}>
          Agendamento do Cliente
        </h2>
      </div>

      {/* LADO DIREITO: BOTÃO VOLTAR ISOLADO */}
      <div style={{ zIndex: 10 }}>
        <button 
          onClick={onGoHome} 
          className="pb-nav-link"
          style={{ 
            color: 'var(--amarelo)', 
            fontWeight: 'bold',
            border: '1px solid var(--amarelo)',
            padding: '8px 20px',
            borderRadius: '0', /* Mantendo o estilo reto da barbearia */
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            background: 'transparent',
            fontSize: '10px',
            letterSpacing: '1px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--amarelo)';
            e.currentTarget.style.color = 'var(--preto)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--amarelo)';
          }}
        >
          ← VOLTAR 
        </button>
      </div>

    </nav>
  );
};

export default Navbar;