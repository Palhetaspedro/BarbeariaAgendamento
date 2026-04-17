import { Check, X } from "lucide-react";

export default function Toast({ toast }) {
  if (!toast) return null;

  return (
    <div className={`pb-toast ${toast.type}`}>
      {toast.type === "success" ? <Check size={15} /> : <X size={15} />}
      {toast.msg}
    </div>
  );
}
