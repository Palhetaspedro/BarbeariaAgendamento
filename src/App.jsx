import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./styles/global.css";

// Importação dos componentes
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import FormPanel from "./components/FormPanel";
import Toast from "./components/Toast";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import AdminDashboard from "./components/AdminDashboard";
import BarbeiroLogin from "./components/BarbeiroLogin"; 
import DeleteModal from "./components/DeleteModal";
import DynamicFavicon from "./components/DynamicFavicon"; 

// Importa as constantes
import { EMPTY_FORM } from "./constants";

const API_URL = "https://palhetabarbeariabackend.onrender.com/agendamento";

export default function App() {
  const [view, setView] = useState("landing"); 
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [appointments, setAppointments] = useState([]);
  const [form, setForm] = useState(EMPTY_FORM || { name: "", service: "", date: "", time: "" });
  const [editingId, setEditingId] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchAppointments = useCallback(async () => {
    try {
      const response = await axios.get(API_URL);
      if (response.data && Array.isArray(response.data)) {
        const formattedData = response.data.map(item => ({
          id: item.id,
          name: item.clienteNome,
          service: item.servico,
          date: item.dataHora ? item.dataHora.split('T')[0] : "",
          time: item.dataHora ? item.dataHora.split('T')[1].substring(0, 5) : "",
          status: item.confirmado ? "confirmado" : "pendente"
        }));
        setAppointments(formattedData);
      }
    } catch (error) {
      console.error("Erro ao buscar agendamentos:", error);
    }
  }, []);

  useEffect(() => {
    if (view === "admin" && isAuthenticated) fetchAppointments();
  }, [view, isAuthenticated, fetchAppointments]);

  // FUNÇÃO ATUALIZADA COM O SEGREDO DO PAYLOAD E LOG DE ERRO
  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();

    if (!form?.name || !form?.service || !form?.date || !form?.time) {
      showToast("Preencha todos os campos.", "error");
      return;
    }

    setLoading(true);

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
        const response = await axios.post(API_URL, payload);
        console.log("Sucesso:", response.data);
        showToast("Agendamento realizado com sucesso!");
      }
      
      setForm(EMPTY_FORM);
      if (isAuthenticated) {
        fetchAppointments();
      } else {
        setTimeout(() => setView("landing"), 2000);
      }

    } catch (error) {
      // Aqui tratamos o erro 400 que você viu no console
      console.error("Detalhes do erro do servidor:", error.response?.data);
      showToast("Erro no formato dos dados ou conexão.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <DynamicFavicon />

      {view === "landing" && (
        <LandingPage onNavigate={(dest) => setView(dest)} />
      )}

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
              onEdit={(appt) => {
                setForm({ name: appt.name, service: appt.service, date: appt.date, time: appt.time });
                setEditingId(appt.id);
              }}
              onDeleteRequest={setDeleteTarget}
              onLogout={() => { setIsAuthenticated(false); setView("landing"); }}
              editingId={editingId}
              form={form}
              setForm={setForm}
              onSubmit={handleSubmit}
              onCancel={() => { setForm(EMPTY_FORM); setEditingId(null); }}
              isLoading={loading}
            />
            {deleteTarget && (
              <DeleteModal 
                target={deleteTarget} 
                onConfirm={async () => {
                  try {
                    await axios.delete(`${API_URL}/${deleteTarget.id}`);
                    setDeleteTarget(null);
                    showToast("Agendamento removido.");
                    fetchAppointments();
                  } catch (e) { showToast("Erro ao deletar.", "error"); }
                }} 
                onCancel={() => setDeleteTarget(null)} 
              />
            )}
            <Toast toast={toast} />
          </>
        )
      )}

      {view === "schedule" && (
        <div style={{ background: '#000', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar onGoHome={() => setView("landing")} />
          
          <main style={{ flex: 1, padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Hero /> 
            
            <FormPanel 
              form={form} 
              setForm={setForm} 
              onSubmit={handleSubmit}
              isLoading={loading} 
            />

            <div style={{ marginTop: '50px', textAlign: 'center' }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '42px', color: 'white' }}>
                A Melhor <span style={{ color: '#FDE047' }}>Barbearia</span> da Região
              </h2>
            </div>
          </main>

          <Footer onNavigate={(dest) => setView(dest)} />
          <Toast toast={toast} />
        </div>
      )}
    </>
  );
}