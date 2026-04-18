import React from 'react';
import { Pencil, Trash2, Scissors } from "lucide-react";
import { formatDate } from "../utils/formatDate";

export default function TablePanel({ appointments = [], onEdit, onDeleteRequest }) {
  const data = appointments || [];

  return (
    <section className="pb-content">
      <div className="pb-table-header">
        <h2 className="pb-table-title">Agendamentos</h2>
        <span className="pb-badge">{data.length}</span>
      </div>

      {/* A div abaixo é a chave para a portabilidade em smartphones */}
      <div className="pb-table-wrap" style={{ 
        width: '100%', 
        overflowX: 'auto', 
        WebkitOverflowScrolling: 'touch', // Scroll suave no iOS
        marginBottom: '1rem'
      }}>
        {data.length === 0 ? (
          <EmptyState />
        ) : (
          <table style={{ minWidth: '600px', width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '12px' }}>Cliente</th>
                <th style={{ textAlign: 'left', padding: '12px' }}>Serviço</th>
                <th style={{ textAlign: 'left', padding: '12px' }}>Data</th>
                <th style={{ textAlign: 'left', padding: '12px' }}>Hora</th>
                <th style={{ textAlign: 'center', padding: '12px' }}>Status</th>
                <th style={{ textAlign: 'center', padding: '12px' }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {data.map((appt) => (
                <AppointmentRow
                  key={appt.id || Math.random()} 
                  appt={appt}
                  onEdit={onEdit}
                  onDeleteRequest={onDeleteRequest}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}

function AppointmentRow({ appt, onEdit, onDeleteRequest }) {
  const safeDate = (dateStr) => {
    try {
      return formatDate ? formatDate(dateStr) : dateStr;
    } catch (e) {
      return dateStr;
    }
  };

  const getStatus = () => {
    const agora = new Date();
    const dataAgendamento = new Date(`${appt.date}T${appt.time}:00`);
    const diaAgendamento = new Date(appt.date + "T00:00:00");
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    if (diaAgendamento < hoje) {
      return { label: "CANCELADO", color: "#991b1b" };
    }
    
    if (agora > dataAgendamento) {
      return { label: "PENDENTE", color: "#854d0e" };
    }

    return { label: "CONFIRMADO", color: "#065f46" };
  };

  const statusInfo = getStatus();

  return (
    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <td className="td-name" style={{ padding: '12px', whiteSpace: 'nowrap' }}>{appt.name || "N/A"}</td>
      <td className="td-service" style={{ padding: '12px' }}>{appt.service || "Geral"}</td>
      <td className="td-date" style={{ padding: '12px' }}>{safeDate(appt.date)}</td>
      <td className="td-date" style={{ padding: '12px' }}>{appt.time || "--:--"}</td>
      <td style={{ padding: '12px', textAlign: 'center' }}>
        <span style={{
          background: statusInfo.color,
          color: 'white',
          padding: '6px 12px',
          borderRadius: '4px',
          fontSize: '10px',
          fontWeight: 'bold',
          display: 'inline-block',
          minWidth: '90px',
          textAlign: 'center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}>
          {statusInfo.label}
        </span>
      </td>
      <td style={{ padding: '12px' }}>
        <div className="actions-cell" style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
          <button className="action-btn action-edit" title="Editar" onClick={() => onEdit && onEdit(appt)}>
            <Pencil size={13} />
          </button>
          <button className="action-btn action-delete" title="Deletar" onClick={() => onDeleteRequest && onDeleteRequest(appt)}>
            <Trash2 size={13} />
          </button>
        </div>
      </td>
    </tr>
  );
}

function EmptyState() {
  return (
    <div className="pb-empty" style={{ textAlign: 'center', padding: '40px' }}>
      <div className="pb-empty-icon" style={{ marginBottom: '10px', opacity: 0.5 }}>
        <Scissors size={30} />
      </div>
      <p style={{ color: 'rgba(255,255,255,0.6)' }}>Nenhum agendamento cadastrado ainda.</p>
    </div>
  );
}