import { useEffect } from "react";

export default function DynamicFavicon() {
  
  useEffect(() => {
    // Cores da Palheta Barbearia
    const goldLight = "#D4AF37"; 
    const goldDark = "#B8860B";  
    const beigeBG = "#F5F5DC";     // Fundo Bege Clássico
    const darkOutline = "#2D1B18"; // Marrom quase preto para contorno super nítido

    const svgString = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:${goldLight};stop-opacity:1" />
            <stop offset="100%" style="stop-color:${goldDark};stop-opacity:1" />
          </linearGradient>
        </defs>
        
        {/* Fundo Bege Arredondado */}
        <rect x="0" y="0" width="100" height="100" rx="20" ry="20" fill="${beigeBG}"/>
        
        {/* Grupo da Tesoura Aberta e Inclinada */}
        <g transform="rotate(-30 50 50)" fill="url(#goldGradient)" stroke="${darkOutline}" stroke-width="2" stroke-linejoin="round">
          
          {/* Lâmina Superior Aberta */}
          <path d="M50 50 L85 25 Q90 22 82 18 L48 45 Z" />
          
          {/* Lâmina Inferior Aberta */}
          <path d="M50 50 L85 75 Q90 78 82 82 L48 55 Z" />
          
          {/* Parafuso de ajuste (Pivô) */}
          <circle cx="50" cy="50" r="4.5" fill="${darkOutline}" stroke="none"/>
          
          {/* Haste Superior e Anel */}
          <path d="M50 50 L30 35 Q22 30 18 40 Q15 50 25 55 L50 50 Z" />
          <circle cx="22" cy="38" r="10" stroke="${darkOutline}" stroke-width="6" fill="none"/>
          
          {/* Haste Inferior e Anel (com o apoio de dedo/descanso) */}
          <path d="M50 50 L30 65 Q22 70 18 60 Q15 50 25 45 L50 50 Z" />
          <circle cx="22" cy="62" r="10" stroke="${darkOutline}" stroke-width="6" fill="none"/>
          
          {/* Detalhe do descanso de dedo (o "rabinho" da tesoura) */}
          <path d="M14 68 Q10 72 15 75 L20 68" fill="none" stroke="${darkOutline}" stroke-width="3" stroke-linecap="round"/>
        </g>
      </svg>
    `;

    const svgBase64 = `data:image/svg+xml;base64,${btoa(svgString)}`;

    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }

    link.href = svgBase64;
    link.type = "image/svg+xml";

  }, []);

  return null;
}