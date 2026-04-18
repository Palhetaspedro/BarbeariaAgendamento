import React, { useState, useEffect } from 'react';
import TablePanel from './TablePanel';
import FormPanel from './FormPanel';
import Footer from './Footer';
import { Scissors, LogOut } from 'lucide-react';

export default function AdminDashboard({ 
  appointments, onEdit, onDeleteRequest, onLogout, editingId, form, setForm, onSubmit, onCancel,
  onUpdateStatus 
}) {
  // Hook para detectar largura da tela em tempo real
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#0a0a0a',
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url("https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop")',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed'
    }}>
      
      {/* NAVBAR RESPONSIVA */}
      <nav style={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: isMobile ? '15px' : '20px 50px', 
        gap: isMobile ? '15px' : '0',
        background: 'rgba(0,0,0,0.8)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.3)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Scissors color="var(--amarelo)" size={24} />
          <span style={{ 
            color: 'white', 
            letterSpacing: isMobile ? '1px' : '3px', 
            fontWeight: 'bold',
            fontSize: isMobile ? '14px' : '16px' 
          }}>
            ÁREA DO ADMINISTRADOR
          </span>
        </div>
        <button onClick={onLogout} style={{
          display: 'flex', alignItems: 'center', gap: '8px', background: 'transparent', 
          border: '1px solid #ff4444', color: '#ff4444', padding: '8px 15px', cursor: 'pointer',
          width: isMobile ? '100%' : 'auto',
          justifyContent: 'center'
        }}>
          <LogOut size={16} /> SAIR
        </button>
      </nav>

      <main style={{ flex: 1, padding: isMobile ? '15px' : '40px' }}>
        <div style={{ 
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: '20px',
          maxWidth: '1400px',
          margin: '0 auto',
          alignItems: 'flex-start'
        }}>
          
          {/* TABELA COM SCROLL LATERAL NO MOBILE */}
          <div style={{ 
            flex: 1, 
            width: '100%',
            background: 'rgba(255,255,255,0.03)', 
            padding: isMobile ? '15px' : '30px', 
            border: '1px solid rgba(255,255,255,0.1)',
            overflowX: 'auto' // Isso evita que a tabela corte no celular
          }}>
            <TablePanel 
              appointments={appointments} 
              onEdit={onEdit} 
              onDeleteRequest={onDeleteRequest}
              onUpdateStatus={onUpdateStatus}
            />
          </div>

          {/* FORMULÁRIO DE EDIÇÃO AJUSTADO */}
          {editingId && (
            <div style={{ 
              width: isMobile ? '100%' : '400px',
              background: 'rgba(0,0,0,0.5)', 
              padding: '20px', 
              border: '1px solid var(--amarelo)',
              position: isMobile ? 'relative' : 'sticky',
              top: '20px'
            }}>
              <FormPanel 
                form={form} setForm={setForm} editing={true} 
                onSubmit={onSubmit} onCancel={onCancel} 
              />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}