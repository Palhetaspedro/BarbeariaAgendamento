import { Scissors } from "lucide-react";
import { SERVICES } from "../constants";

// 1. Mudei o nome para FormPanel para bater com o import do App.jsx
export default function FormPanel({ form, setForm, onSubmit }) {
  
  // 2. Proteção: Se o form ainda não carregou, não deixa o app quebrar
  if (!form) return null;

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: '#000', 
      padding: '20px'
    }}>
      
      <div className="pb-card" style={{
        width: '100%',
        maxWidth: '450px',
        padding: '40px',
        border: '1px solid var(--amarelo)',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("https://images.unsplash.com/photo-1599351431613-18ef1fdd27e1?q=80&w=688&auto=format&fit=crop")',
        backgroundSize: 'cover',
        color: 'white',
        boxShadow: '0 0 30px rgba(212, 175, 55, 0.1)' 
      }}>
        
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <Scissors color="var(--amarelo)" size={32} style={{ marginBottom: '10px' }} />
          <h2 style={{ fontFamily: 'Cormorant Garamond', fontSize: '32px', letterSpacing: '2px' }}>
            RESERVE SEU HORÁRIO
          </h2>
          <p style={{ color: 'var(--amarelo)', fontSize: '12px', letterSpacing: '1px' }}>ÁREA DO CLIENTE</p>
        </div>

        <div className="pb-field" style={{ marginBottom: '20px' }}>
          <label className="pb-label" style={{ color: 'var(--amarelo)' }}>Nome Completo</label>
          <input
            className="pb-input"
            placeholder="Digite seu nome"
            value={form.name || ""}
            onChange={handleChange("name")}
            style={{ background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid #333' }}
          />
        </div>

        <div className="pb-field" style={{ marginBottom: '20px' }}>
          <label className="pb-label" style={{ color: 'var(--amarelo)' }}>Serviço</label>
          <select
            className="pb-select"
            value={form.service || ""}
            onChange={handleChange("service")}
            style={{ background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid #333' }}
          >
            <option value="">Selecione o corte</option>
            {SERVICES && SERVICES.map((s) => (
              <option key={s} value={s} style={{background: '#000'}}>{s}</option>
            ))}
          </select>
        </div>

        <div className="pb-field" style={{ marginBottom: '30px' }}>
          <label className="pb-label" style={{ color: 'var(--amarelo)' }}>Data e Hora</label>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input
              type="date"
              className="pb-input"
              value={form.date || ""}
              onChange={handleChange("date")}
              style={{ background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid #333' }}
            />
            <input
              type="time"
              className="pb-input"
              value={form.time || ""}
              onChange={handleChange("time")}
              style={{ background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid #333' }}
            />
          </div>
        </div>

        <button
          type="button" 
          onClick={(e) => onSubmit(e)} 
          style={{
            width: '100%',
            padding: '18px',
            background: 'var(--amarelo)',
            color: 'black',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            letterSpacing: '1px'
          }}
        >
          CONFIRMAR AGENDAMENTO
        </button>
      </div>
    </div>
  );
}