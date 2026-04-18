export default function DeleteModal({ target, onConfirm, onCancel }) {
  if (!target) return null;

  return (
    <div className="pb-overlay" onClick={onCancel}>
      <div className="pb-modal" onClick={(e) => e.stopPropagation()}>
        <h3>Remover Agendamento</h3>
        <p>
          Tem certeza que deseja remover o agendamento de{" "}
          <strong>{target.name}</strong>? Esta ação não pode ser desfeita.
        </p>
        <div className="pb-modal-actions">
          <button className="pb-btn-neutral" onClick={onCancel}>
            Cancelar
          </button>
          <button className="pb-btn-danger" onClick={() => onConfirm(target.id)}>
            Remover
          </button>
        </div>
      </div>
    </div>
  );
}
