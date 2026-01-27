"use client";

export default function NeblinaRoja() {
  return (
    <>
      {/* Fondo de neblina roja */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Capa base de color */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/15 via-black to-red-800/10" />
        
        {/* Efectos de partículas/nubes */}
        <div className="absolute inset-0">
          {/* Nube 1 - Superior izquierda */}
          <div 
            className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-red-600/20 to-red-800/10 blur-[80px] animate-pulse-slow"
            style={{
              left: "5%",
              top: "10%",
            }}
          />
          
          {/* Nube 2 - Centro derecha */}
          <div 
            className="absolute w-[700px] h-[700px] rounded-full bg-gradient-to-r from-red-700/15 to-red-900/8 blur-[90px] animate-pulse-slower"
            style={{
              right: "10%",
              top: "40%",
            }}
          />
          
          {/* Nube 3 - Inferior centro */}
          <div 
            className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-red-800/12 to-red-600/18 blur-[70px] animate-float-slow"
            style={{
              left: "50%",
              bottom: "15%",
              transform: "translateX(-50%)",
            }}
          />
        </div>
        
        {/* Bruma superior sutil */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-red-500/10 via-red-500/3 to-transparent" />
        
        {/* Bruma inferior sutil */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-red-700/8 via-red-700/3 to-transparent" />
      </div>
    </>
  );
}