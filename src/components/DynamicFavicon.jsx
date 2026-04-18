import { useEffect } from "react";

// Este componente renderiza o SVG da tesoura dourada e o insere no <head>
export default function DynamicFavicon() {
  
  useEffect(() => {
    // 1. Defina as cores da Palheta Barbearia
    const goldLight = "#D4AF37"; // Dourado mais claro para o gradiente
    const goldDark = "#AA8A2A";  // Dourado mais escuro para sombra
    const blackBG = "#000000";   // Preto profundo para o fundo do ícone

    // 2. O código SVG da Tesoura Estilizada
    const svgString = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:${goldLight};stop-opacity:1" />
            <stop offset="50%" style="stop-color:${goldDark};stop-opacity:1" />
            <stop offset="100%" style="stop-color:${goldLight};stop-opacity:1" />
          </linearGradient>
        </defs>
        
        <rect x="0" y="0" width="100" height="100" rx="25" ry="25" fill="${blackBG}"/>
        
        <g fill="url(#goldGradient)">
          <path d="M45 10 L50 45 L55 10 Q50 5 45 10 Z" />
          <path d="M55 10 L50 45 L45 10 Q50 5 55 10 Z" transform="scale(-1, 1) translate(-100, 0)" />
          
          <circle cx="50" cy="45" r="3" fill="#886B1A"/>
          
          <path d="M50 45 L35 70 Q30 80 40 85 Q50 90 55 75 L50 45 Z" />
          <path d="M50 45 L65 70 Q70 80 60 85 Q50 90 45 75 L50 45 Z" />
          
          <circle cx="38" cy="78" r="8" stroke="url(#goldGradient)" stroke-width="4" fill="none"/>
          <circle cx="62" cy="78" r="8" stroke="url(#goldGradient)" stroke-width="4" fill="none"/>
        </g>
      </svg>
    `;

    // 3. Converta o SVG para Base64 para ser usado como URL
    const svgBase64 = `data:image/svg+xml;base64,${btoa(svgString)}`;

    // 4. Encontre ou Crie a tag <link rel="icon"> no head do HTML
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }

    // 5. Atualize o href do Favicon com o SVG dinâmico
    link.href = svgBase64;
    link.type = "image/svg+xml"; // Avise o navegador que é um SVG

  }, []); // Executa apenas uma vez na montagem do componente

  return null; // Este componente não renderiza nada visível na tela
}