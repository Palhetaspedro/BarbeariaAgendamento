import React from 'react';
import { Scissors, Zap, Wind } from 'lucide-react'; 

const BarberBackground = () => {
  const iconsCount = 15;

  return (
    <div className="barber-icon-container">
      {[...Array(iconsCount)].map((_, i) => {
        const duration = 10 + Math.random() * 15;
        const delay = Math.random() * 20;
        const left = Math.random() * 95;
        
        // Alterna entre Tesoura, Raio (máquina) e Vento (secador)
        const icons = [<Scissors size={24}/>, <Zap size={24}/>, <Wind size={24}/>];
        const SelectedIcon = icons[i % 3];

        return (
          <div
            key={i}
            className="falling-icon"
            style={{
              left: `${left}%`,
              animationDuration: `${duration}s`,
              animationDelay: `-${delay}s`,
            }}
          >
            {SelectedIcon}
          </div>
        );
      })}
    </div>
  );
};

export default BarberBackground;