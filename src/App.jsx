import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./styles/global.css";

// Importação dos componentes
import Navbar      from "./components/Navbar";
import FormPanel   from "./components/FormPanel";
import Toast       from "./components/Toast";
import Footer      from "./components/Footer";
import LandingPage from "./components/LandingPage";
import AdminDashboard from "./components/AdminDashboard";
import BarbeiroLogin from "./components/BarbeiroLogin"; 
import DeleteModal from "./components/DeleteModal";
import DynamicFavicon from "./components/DynamicFavicon"; 

import { EMPTY_FORM } from "./constants";

// Altere para a URL do seu Railway quando subir para a nuvem
const API_URL = "https://palhetabarbeariabackend.onrender.com/agendamentos";

export default function App() {
  const [view, setView] = useState("landing"); 
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [appointments, setAppointments] = useState([]);
  const [form, setForm] = useState(EMPTY_FORM);
  const [editingId, setEditingId] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchAppointments = useCallback(async () => {
    try {
      const response = await axios.get(API_URL);
      const formattedData = response.data.map(item => ({
        id: item.id,
        name: item.clienteNome,
        service: item.servico,
        date: item.dataHora.split('T')[0],
        time: item.dataHora.split('T')[1].substring(0, 5),
        status: item.confirmado ? "confirmado" : "pendente"
      }));
      setAppointments(formattedData);
    } catch (error) {
      console.error("Erro ao buscar agendamentos:", error);
    }
  }, []);

  useEffect(() => {
    if (view === "admin" && isAuthenticated) fetchAppointments();
  }, [view, isAuthenticated, fetchAppointments]);

  const handleSubmit = async () => {
    if (!form.name || !form.service || !form.date || !form.time) {
      showToast("Preencha todos os campos.", "error");
      return;
    }
    const payload = {
      clienteNome: form.name,
      servico: form.service,
      dataHora: `${form.date}T${form.time}:00`
    };

    try {
      if (editingId !== null) {
        await axios.put(`${API_URL}/${editingId}`, payload);
        showToast("Agendamento atualizado!");
        setEditingId(null);
      } else {
        await axios.post(API_URL, payload);
        showToast("Agendamento realizado com sucesso!");
      }
      setForm(EMPTY_FORM);
      if (isAuthenticated) fetchAppointments();
    } catch (error) {
      showToast("Erro na operação.", "error");
    }
  };

  const handleEdit = (appt) => {
    setForm({ name: appt.name, service: appt.service, date: appt.date, time: appt.time });
    setEditingId(appt.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setDeleteTarget(null);
      showToast("Agendamento removido.");
      fetchAppointments();
    } catch (error) {
      showToast("Erro ao deletar.", "error");
    }
  };

  return (
    <>
      <DynamicFavicon />

      {/* 1. TELA INICIAL (LANDING) */}
      {view === "landing" && (
        <LandingPage onNavigate={(dest) => setView(dest)} />
      )}

      {/* 2. ÁREA DO ADMINISTRADOR */}
      {view === "admin" && (
        !isAuthenticated ? (
          <BarbeiroLogin 
            onLogin={() => setIsAuthenticated(true)} 
            onGoHome={() => setView("landing")} 
          />
        ) : (
          <>
            <AdminDashboard 
              appointments={appointments}
              onEdit={handleEdit}
              onDeleteRequest={setDeleteTarget}
              onLogout={() => { setIsAuthenticated(false); setView("landing"); }}
              editingId={editingId}
              form={form}
              setForm={setForm}
              onSubmit={handleSubmit}
              onCancel={() => { setForm(EMPTY_FORM); setEditingId(null); }}
            />
            <DeleteModal 
              target={deleteTarget} 
              onConfirm={() => handleDelete(deleteTarget.id)} 
              onCancel={() => setDeleteTarget(null)} 
            />
            <Toast toast={toast} />
          </>
        )
      )}

      {/* 3. TELA DE AGENDAMENTO DO CLIENTE */}
      {view === "schedule" && (
        <div style={{ background: '#000', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar onGoHome={() => setView("landing")} />
          
          <main style={{ flex: 1, padding: '60px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <FormPanel 
              form={form} 
              setForm={setForm} 
              editing={false} 
              onSubmit={handleSubmit} 
            />

            <div style={{ marginTop: '80px', textAlign: 'center' }}>
              <h2 style={{ 
                fontFamily: 'Cormorant Garamond, serif', 
                fontSize: '52px', 
                color: 'white', 
                fontStyle: 'italic',
                margin: 0 
              }}>
                A Melhor <span style={{ color: 'var(--amarelo)' }}>Barbearia</span> da Região
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '6px', fontSize: '14px', marginTop: '10px' }}>
                TRADIÇÃO • PRECISÃO • ESTILO
              </p>
            </div>
          </main>

          <Footer onNavigate={(dest) => setView(dest)} />
          <Toast toast={toast} />
        </div>
      )}
    </>
  );
}