import React from 'react';
import { Instagram, Phone, ArrowRight, MapPin } from 'lucide-react';
import BarberBackground from './BarberBackground';

const LandingPage = ({ onNavigate }) => {
  const gallery = [
    { id: 1, title: "Corte com Degradê", url: "https://plus.unsplash.com/premium_photo-1661645788141-8196a45fb483?q=80&w=870&auto=format&fit=crop" },
    { id: 2, title: "Corte Social Premium", url: "https://plus.unsplash.com/premium_photo-1661290481306-4841edd49719?q=80&w=1032&auto=format&fit=crop" },
    { id: 3, title: "Barba Terapia", url: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=686&auto=format&fit=crop" },
    { id: 4, title: "Melhores Equipamentos", url: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=500" },
  ];

  const fotoSobre = "https://images.unsplash.com/photo-1567894340315-735d7c361db0?q=80&w=737&auto=format&fit=crop";

  return (
    <div className="pb-landing-wrapper" style={{ position: 'relative', overflowX: 'hidden', background: 'var(--bege)' }}>

      <BarberBackground />

      {/* NAVBAR */}
      <nav className="pb-navbar" style={{ position: 'relative', zIndex: 10 }}>
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
        {/* CORREÇÃO: Passando 'schedule' explicitamente */}
        <button onClick={() => onNavigate('schedule')} className="pb-btn-primary" style={{ width: 'auto', padding: '10px 24px' }}>
          Agendar Agora
        </button>
      </nav>

      {/* HERO SECTION */}
      <header className="pb-hero" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 5 }}>
        <div className="pb-hero-eyebrow">Estilo com Precisão</div>
        <h1 className="pb-hero-title">
          Transforme seu <em>visual</em>
        </h1>
        <p className="pb-hero-sub">Muito mais que um corte. Uma experiência de cuidado masculino exclusiva.</p>
      </header>

      {/* GALERIA */}
      <section style={{
        position: 'relative',
        zIndex: 5,
        padding: '100px 56px',
        backgroundImage: 'linear-gradient(rgba(46, 46, 46, 0.85), rgba(245, 245, 220, 0.85)), url("https://images.unsplash.com/photo-1599351431613-18ef1fdd27e1?q=80&w=688&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <h2 className="pb-table-title" style={{ marginBottom: '60px', textAlign: 'center', fontSize: '32px' }}>
          Portfólio <span style={{ color: 'var(--amarelo)', fontStyle: 'italic' }}>Premium</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
          {gallery.map((item, index) => (
            <div
              key={item.id}
              className="pb-table-wrap"
              style={{
                borderRadius: '0',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                background: 'white',
                animationDelay: `${index * 0.15}s`,
                transition: 'transform 0.4s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-12px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ overflow: 'hidden' }}>
                <img src={item.url} alt={item.title} style={{ width: '100%', height: '350px', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: '20px', background: 'var(--preto)', color: 'var(--amarelo)', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center' }}>
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO: SOBRE MIM */}
      <section style={{
        position: 'relative',
        zIndex: 5,
        // Padding dinâmico: menor no mobile (40px 20px) e maior no desktop
        padding: window.innerWidth < 768 ? '60px 20px' : '100px 56px',
        background: 'var(--bege)',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={{
          maxWidth: '1000px',
          width: '100%',
          display: 'flex',
          // Empilha (column) no mobile e coloca lado a lado (row) no desktop
          flexDirection: window.innerWidth < 768 ? 'column' : 'row',
          gap: window.innerWidth < 768 ? '40px' : '60px',
          alignItems: 'center'
        }}>

          {/* Container da Foto */}
          <div style={{
            position: 'relative',
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '100%',
              // No mobile a foto diminui proporcionalmente
              maxWidth: window.innerWidth < 768 ? '280px' : '380px',
              height: window.innerWidth < 768 ? '360px' : '480px',
              border: '2px solid var(--amarelo)',
              padding: '10px',
              background: 'white',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}>
              <img
                src={fotoSobre}
                alt="O Barbeiro"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(20%)'
                }}
              />
            </div>
          </div>

          {/* Container do Texto (Se houver texto ao lado) */}
          <div style={{
            flex: 1,
            textAlign: window.innerWidth < 768 ? 'center' : 'left'
          }}>
            {/* Aqui vai o seu <h2> e <p> sobre você */}
          </div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section style={{ background: 'var(--amarelo)', padding: '100px 20px', textAlign: 'center', position: 'relative', zIndex: 5 }}>
        <h2 className="pb-hero-title" style={{ color: 'var(--preto)', marginBottom: '40px', fontSize: '48px' }}>Pronto para o próximo nível?</h2>
        {/* CORREÇÃO: Passando 'schedule' explicitamente */}
        <button onClick={() => onNavigate('schedule')} className="pb-btn-primary" style={{ width: 'auto', padding: '20px 60px', fontSize: '16px', margin: '0 auto', background: 'var(--preto)', color: 'var(--amarelo)', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
          Agendar Atendimento <ArrowRight style={{ marginLeft: '10px' }} size={18} />
        </button>
      </section>

      {/* FOOTER */}
      <footer className="pb-footer" style={{ position: 'relative', zIndex: 10, padding: '40px 20px', background: 'var(--preto)', color: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div className="pb-footer-brand" style={{ fontSize: '24px', fontWeight: 'bold' }}>Palheta Barbearia</div>
            <div className="pb-footer-tagline" style={{ opacity: 0.5 }}>A arte da barbearia clássica. © 2024</div>
          </div>

          <div className="pb-footer-right" style={{ textAlign: 'right' }}>
            <div className="pb-footer-socials" style={{ marginBottom: '15px', display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button className="pb-social-btn"><Instagram size={18} /></button>
              <button className="pb-social-btn"><Phone size={18} /></button>
              <button className="pb-social-btn"><MapPin size={18} /></button>
            </div>

            {/* CORREÇÃO: Passando 'admin' explicitamente */}
            <button
              onClick={() => onNavigate('admin')}
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(255,255,255,0.2)',
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                cursor: 'pointer'
              }}
            >
              Área dos Barbeiros
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;