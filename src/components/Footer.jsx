import { Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="pb-footer">
        <div>
          <p className="pb-footer-brand">Palheta Barbearia</p>
          <p className="pb-footer-tagline">Estilo com precisão — desde 2018</p>
        </div>

        <div className="pb-footer-right">
          <div className="pb-footer-contacts">
            <div className="pb-contact-item">
              <Phone size={12} />
              <span>(61) 99999-0000</span>
            </div>
            <div className="pb-contact-item">
              <Mail size={12} />
              <span>contato@palhetabarbearia.com</span>
            </div>
          </div>
          <div className="pb-footer-socials">
            <button className="pb-social-btn" title="Instagram"><Instagram size={14} /></button>
            <button className="pb-social-btn" title="Facebook"><Facebook size={14} /></button>
            <button className="pb-social-btn" title="Twitter"><Twitter size={14} /></button>
          </div>
        </div>
      </footer>

      <div className="pb-footer-bottom">
        <span className="pb-footer-copy">© 2025 Palheta Barbearia — Todos os direitos reservados</span>
        <span className="pb-footer-copy">Conectar à API Java</span>
      </div>
    </>
  );
}