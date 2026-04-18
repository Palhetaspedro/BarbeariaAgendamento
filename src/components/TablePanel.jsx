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

      <div className="pb-table-wrap">
        {data.length === 0 ? (
          <EmptyState />
        ) : (
          <table>
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Serviço</th>
                <th>Data</th>
                <th>Hora</th>
                <th>Status</th>
                <th>Ações</th>
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

  // --- LÓGICA DE STATUS AUTOMÁTICO ---
  const getStatus = () => {
    const agora = new Date();
    
    // Criamos a data do agendamento (ajustando o formato para o JS entender)
    const dataAgendamento = new Date(`${appt.date}T${appt.time}:00`);
    
    // Criamos objetos apenas das datas (sem as horas) para comparar os dias
    const diaAgendamento = new Date(appt.date + "T00:00:00");
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    // 1. Se o dia do agendamento já passou: CANCELADO
    if (diaAgendamento < hoje) {
      return { label: "CANCELADO", color: "#991b1b" }; // Vermelho
    }
    
    // 2. Se o dia é hoje ou futuro, mas o horário específico já passou: PENDENTE
    if (agora > dataAgendamento) {
      return { label: "PENDENTE", color: "#854d0e" }; // Amarelo/Marrom
    }

    // 3. Caso contrário: CONFIRMADO
    return { label: "CONFIRMADO", color: "#065f46" }; // Verde
  };

  const statusInfo = getStatus();

  return (
    <tr>
      <td className="td-name">{appt.name || "N/A"}</td>
      <td className="td-service">{appt.service || "Geral"}</td>
      <td className="td-date">{safeDate(appt.date)}</td>
      <td className="td-date">{appt.time || "--:--"}</td>
      <td>
        <span style={{
          background: statusInfo.color,
          color: 'white',
          padding: '6px 12px',
          borderRadius: '4px',
          fontSize: '10px',
          fontWeight: 'bold',
          display: 'inline-block',
          minWidth: '90px',
          textAlign: 'center'
        }}>
          {statusInfo.label}
        </span>
      </td>
      <td>
        <div className="actions-cell">
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
    <div className="pb-empty">
      <div className="pb-empty-icon">
        <Scissors size={20} />
      </div>
      <p>Nenhum agendamento cadastrado ainda.</p>
    </div>
  );
}