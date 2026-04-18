import React from 'react';
import { Instagram, Phone, ArrowRight, MapPin } from 'lucide-react';
import BarberBackground from './BarberBackground';

const LandingPage = ({ onNavigate }) => {
  const gallery = [
    { id: 1, title: "Corte com Degradê", url: "https://plus.unsplash.com/premium_photo-1661645788141-8196a45fb483?q=80&w=870&auto=format&fit=crop" },
    { id: 2, title: "Corte Social Premium", url: "https://plus.unsplash.com/premium_photo-1661290481306-4841edd49719?q=80&w=1032&auto=format&fit=crop" },
    { id: 3, title: "Barba Terapia", url: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=686&auto=format&fit=crop" },
    { id: 4, title: "Melhores Equipamentos", url: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=500" },
    { id: 5, title: "Corte Kids", url: "https://plus.unsplash.com/premium_photo-1677098576199-971c398f5403?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 6, title: "Toalha Quente", url: "https://images.unsplash.com/photo-1653875700329-a7c8aca94c95?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
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
        padding: window.innerWidth < 768 ? '60px 20px' : '100px 56px',
        background: 'var(--bege)',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={{
          maxWidth: '1000px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: window.innerWidth < 768 ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: window.innerWidth < 768 ? '40px' : '60px',
          alignItems: 'center'
        }}>

          <div style={{ position: 'relative' }}>
            <div style={{
              width: '100%',
              maxWidth: window.innerWidth < 768 ? '300px' : '380px',
              height: window.innerWidth < 768 ? '400px' : '480px',
              border: '2px solid var(--amarelo)',
              padding: '15px',
              margin: '0 auto',
              background: 'white'
            }}>
              <img
                src={fotoSobre}
                alt="O Barbeiro"
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%)' }}
              />
            </div>
          </div>

          <div style={{ textAlign: window.innerWidth < 768 ? 'center' : 'left' }}>
            <span style={{
              color: 'var(--amarelo)',
              fontWeight: '600',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontSize: '13px'
            }}>
              Nossa História
            </span>

            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: window.innerWidth < 768 ? '32px' : '42px',
              color: 'var(--preto)',
              margin: '10px 0 25px'
            }}>
              A Jornada por trás da <em>Navalha</em>
            </h2>

            <p style={{
              lineHeight: '1.8',
              color: 'rgba(0,0,0,0.7)',
              marginBottom: '20px',
              fontSize: '16px'
            }}>
              A Palheta Barbearia nasceu da paixão pela barbearia clássica e pelo desejo de resgatar o ritual de cuidado masculino.
            </p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section style={{ background: 'var(--amarelo)', padding: '100px 20px', textAlign: 'center', position: 'relative', zIndex: 5 }}>
        <h2 className="pb-hero-title" style={{ color: 'var(--preto)', marginBottom: '40px', fontSize: '48px' }}>Pronto para o próximo nível?</h2>
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