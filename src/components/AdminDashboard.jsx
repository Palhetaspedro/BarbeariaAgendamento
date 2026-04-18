import React from 'react';
import TablePanel from './TablePanel';
import FormPanel from './FormPanel';
import Footer from './Footer';
import { Scissors, LogOut } from 'lucide-react';

export default function AdminDashboard({ 
  appointments, onEdit, onDeleteRequest, onLogout, editingId, form, setForm, onSubmit, onCancel,
  onUpdateStatus // <-- Receba a nova prop aqui
}) {
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
      
      {/* NAVBAR DO ADM */}
      <nav style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '20px 50px', 
        background: 'rgba(0,0,0,0.8)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.3)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Scissors color="var(--amarelo)" size={24} />
          <span style={{ color: 'white', letterSpacing: '3px', fontWeight: 'bold' }}>ÁREA DO ADMINISTRADOR</span>
        </div>
        <button onClick={onLogout} style={{
          display: 'flex', alignItems: 'center', gap: '8px', background: 'transparent', 
          border: '1px solid #ff4444', color: '#ff4444', padding: '8px 15px', cursor: 'pointer'
        }}>
          <LogOut size={16} /> SAIR
        </button>
      </nav>

      <main style={{ flex: 1, padding: '40px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: editingId ? '1fr 400px' : '1fr', 
          gap: '30px',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '30px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <TablePanel 
              appointments={appointments} 
              onEdit={onEdit} 
              onDeleteRequest={onDeleteRequest}
              onUpdateStatus={onUpdateStatus} // <-- Repasse para a tabela aqui
            />
          </div>

          {editingId && (
            <div style={{ background: 'rgba(0,0,0,0.5)', padding: '20px', border: '1px solid var(--amarelo)' }}>
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