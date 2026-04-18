import React from 'react';
import { Scissors, Zap, Wind } from 'lucide-react'; 

const BarberBackground = () => {
  const iconsCount = 15;

  // Criamos uma lista de componentes de ícones (referências, não elementos prontos)
  const iconTypes = [Scissors, Zap, Wind];

  return (
    <div className="barber-icon-container">
      {[...Array(iconsCount)].map((_, i) => {
        const duration = 10 + Math.random() * 15;
        const delay = Math.random() * 20;
        const left = Math.random() * 95;
        
        // Seleciona o componente da lista usando o resto da divisão
        const IconComponent = iconTypes[i % iconTypes.length];

        return (
          <div
            key={i}
            className="falling-icon"
            style={{
              left: `${left}%`,
              animationDuration: `${duration}s`,
              animationDelay: `-${delay}s`,
              position: 'absolute', // Garante que não quebre o layout
              opacity: 0.1 // Geralmente background é sutil
            }}
          >
            {/* Renderiza o componente corretamente */}
            <IconComponent size={24} />
          </div>
        );
      })}
    </div>
  );
};

export default BarberBackground;