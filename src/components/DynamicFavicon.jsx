import { useEffect } from "react";

export default function DynamicFavicon() {
  
  useEffect(() => {
    const goldLight = "#D4AF37"; 
    const goldDark = "#B8860B";  
    const beigeBG = "#F5F5DC";     
    const darkOutline = "#2D1B18"; 

    // Ajustei o viewBox e as coordenadas para a tesoura ficar CENTRALIZADA
    const svgString = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:${goldLight};stop-opacity:1" />
            <stop offset="100%" style="stop-color:${goldDark};stop-opacity:1" />
          </linearGradient>
        </defs>
        
        <rect x="0" y="0" width="100" height="100" rx="18" ry="18" fill="${beigeBG}"/>
        
        {/* Grupo rotacionado e levemente diminuído (scale 0.9) para caber na tela */}
        <g transform="translate(50,50) rotate(-30) scale(0.85) translate(-50,-50)" 
           fill="url(#goldGradient)" stroke="${darkOutline}" stroke-width="3" stroke-linejoin="round">
          
          {/* Lâmina Superior */}
          <path d="M50 50 L90 20 Q95 15 85 10 L45 45 Z" />
          
          {/* Lâmina Inferior */}
          <path d="M50 50 L90 80 Q95 85 85 90 L45 55 Z" />
          
          {/* Parafuso central mais aparente */}
          <circle cx="50" cy="50" r="5" fill="${darkOutline}" stroke="none"/>
          
          {/* Haste e Anel Superior */}
          <path d="M50 50 L30 30 Q20 20 15 35 Q10 50 25 55 L50 50 Z" />
          <circle cx="18" cy="32" r="12" stroke="${darkOutline}" stroke-width="8" fill="none"/>
          
          {/* Haste e Anel Inferior + Descanso de dedo */}
          <path d="M50 50 L30 70 Q20 80 15 65 Q10 50 25 45 L50 50 Z" />
          <circle cx="18" cy="68" r="12" stroke="${darkOutline}" stroke-width="8" fill="none"/>
          <path d="M10 75 Q5 80 12 85" fill="none" stroke="${darkOutline}" stroke-width="4" stroke-linecap="round"/>
        </g>
      </svg>
    `;

    // Usando encodeURIComponent em vez de btoa para evitar erros de caracteres
    const svgUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`;

    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }

    link.href = svgUrl;
    link.type = "image/svg+xml";

  }, []);

  return null;
}