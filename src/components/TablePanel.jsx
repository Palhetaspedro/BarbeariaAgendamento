import React from 'react';
import { Pencil, Trash2, Scissors } from "lucide-react";
import { formatDate } from "../utils/formatDate";

export default function TablePanel({ appointments = [], onEdit, onDeleteRequest }) {
  // Proteção contra appointments sendo null ou undefined
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
                  key={appt.id || Math.random()} // Evita erro se o ID sumir
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
  // Garante que o formatDate não quebre se a data for inválida
  const safeDate = (dateStr) => {
    try {
      return formatDate ? formatDate(dateStr) : dateStr;
    } catch (e) {
      return dateStr;
    }
  };

  return (
    <tr>
      <td className="td-name">{appt.name || "N/A"}</td>
      <td className="td-service">{appt.service || "Geral"}</td>
      <td className="td-date">{safeDate(appt.date)}</td>
      <td className="td-date">{appt.time || "--:--"}</td>
      <td><StatusPill status={appt.status} /></td>
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

function StatusPill({ status }) {
  // Garante que o status não quebre a classe CSS se estiver vazio
  const currentStatus = status || "pendente";
  return <span className={`status-pill status-${currentStatus}`}>{currentStatus}</span>;
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