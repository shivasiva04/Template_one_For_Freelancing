import React from 'react';

// Common button styles tailored with Tailwind
const variants = {
  primary: "bg-white text-slate-900 hover:scale-[1.02] hover:shadow-xl",
  secondary: "bg-white/90 text-slate-900 hover:bg-white shadow-md",
  ghost: "bg-transparent text-white border border-white/30 hover:bg-white/10"
};

const Button = ({ children, variant = 'primary', className = "", icon, ...props }) => {
  return (
    <button 
      className={`
        flex items-center justify-center gap-2 px-6 py-3 rounded-xl 
        font-semibold transition-all duration-300 active:scale-95
        ${variants[variant]} 
        ${className}
      `}
      {...props}
    >
      {children}
      {icon && <span className="p-1 bg-slate-900 rounded-full text-white">{icon}</span>}
    </button>
  );
};

export default Button;