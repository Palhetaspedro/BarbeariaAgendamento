import { Pencil, Trash2, Scissors } from "lucide-react";
import { formatDate } from "../utils/formatDate";

export default function TablePanel({ appointments, onEdit, onDeleteRequest }) {
  return (
    <section className="pb-content">
      <div className="pb-table-header">
        <h2 className="pb-table-title">Agendamentos</h2>
        <span className="pb-badge">{appointments.length}</span>
      </div>

      <div className="pb-table-wrap">
        {appointments.length === 0 ? (
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
              {appointments.map((appt) => (
                <AppointmentRow
                  key={appt.id}
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
  return (
    <tr>
      <td className="td-name">{appt.name}</td>
      <td className="td-service">{appt.service}</td>
      <td className="td-date">{formatDate(appt.date)}</td>
      <td className="td-date">{appt.time}</td>
      <td><StatusPill status={appt.status} /></td>
      <td>
        <div className="actions-cell">
          <button className="action-btn action-edit" title="Editar" onClick={() => onEdit(appt)}>
            <Pencil size={13} />
          </button>
          <button className="action-btn action-delete" title="Deletar" onClick={() => onDeleteRequest(appt)}>
            <Trash2 size={13} />
          </button>
        </div>
      </td>
    </tr>
  );
}

function StatusPill({ status }) {
  return <span className={`status-pill status-${status}`}>{status}</span>;
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