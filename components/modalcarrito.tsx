"use client";

import React, { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ModalCarritoProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productImage: string;
  size: string;
  quantity: number;
}

export default function ModalCarrito({
  isOpen,
  onClose,
  productName,
  productImage,
  size,
  quantity,
}: ModalCarritoProps) {
  const [animationStep, setAnimationStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setAnimationStep(0);
      setProgress(0);
      
      // Paso 1: Mostrar prenda flotando
      const timer1 = setTimeout(() => {
        setAnimationStep(1);
      }, 800);
      
      // Paso 2: Mostrar mensaje de éxito
      const timer2 = setTimeout(() => {
        setAnimationStep(2);
      }, 1800);
      
      // Cerrar automáticamente después de 3 segundos
      const timer3 = setTimeout(() => {
        onClose();
      }, 3000);
      
      // Animación de la barra de progreso
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + 100 / 30; // 30 intervalos en 3 segundos
          return newProgress > 100 ? 100 : newProgress;
        });
      }, 100);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearInterval(progressInterval);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center">
        {/* Fondo negro con efecto de partículas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/95"
        />
        
        {/* Efecto de partículas rojas luminosas */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[2px] h-[2px] bg-red-500 rounded-full shadow-[0_0_8px_2px_rgba(239,68,68,0.7)]"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0.3,
              }}
              animate={{
                y: [null, -20, 20, -10],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
        
        {/* Contenido del modal */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.7, opacity: 0, y: 50 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-md mx-4"
        >
          <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl shadow-2xl overflow-hidden border border-red-500/30">
            {/* Efecto de borde luminoso */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent pointer-events-none" />
            
            <div className="relative p-8">
              {/* Animación principal */}
              <div className="flex flex-col items-center py-6">
                {/* Prenda volando */}
                {animationStep < 2 && (
                  <div className="relative w-full h-48 mb-10">
                    {/* Carrito destino con efecto luminoso */}
                    <div className="absolute right-6 bottom-2">
                      <motion.div
                        animate={{ 
                          scale: animationStep === 1 ? [1, 1.3, 1] : 1,
                          rotate: animationStep === 1 ? [0, -15, 15, 0] : 0,
                          boxShadow: animationStep === 1 
                            ? ["0 0 20px rgba(239,68,68,0.3)", "0 0 40px rgba(239,68,68,0.6)", "0 0 20px rgba(239,68,68,0.3)"]
                            : "0 0 20px rgba(239,68,68,0.3)"
                        }}
                        transition={{ duration: 0.8, repeat: animationStep === 1 ? 0 : Infinity }}
                        className="relative"
                      >
                        <div className="relative p-3 rounded-full bg-gradient-to-br from-gray-800 to-black border border-red-500/50">
                          <ShoppingBag className="w-20 h-20 text-red-400" />
                          
                          {/* Efecto de brillo en el carrito */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/20 to-transparent" />
                        </div>
                        
                        {/* Contador rojo luminoso */}
                        <motion.div
                          animate={{ 
                            scale: [1, 1.2, 1],
                            boxShadow: ["0 0 10px #ef4444", "0 0 20px #ef4444", "0 0 10px #ef4444"]
                          }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center border-2 border-white"
                        >
                          <span className="text-white text-sm font-black">+{quantity}</span>
                        </motion.div>
                      </motion.div>
                    </div>
                    
                    {/* Prenda volando con estela roja */}
                    <motion.div
                      key="flying-item"
                      initial={{ x: -150, opacity: 0, scale: 0.3 }}
                      animate={ 
                        animationStep === 0 
                          ? { 
                              x: 0, 
                              opacity: 1, 
                              scale: 1,
                              y: [0, -25, 0]
                            }
                          : animationStep === 1
                          ? {
                              x: [0, 320],
                              y: [0, -80, 0],
                              scale: [1, 0.7, 0.4],
                              opacity: [1, 0.9, 0]
                            }
                          : {}
                      }
                      transition={
                        animationStep === 0
                          ? {
                              x: { duration: 0.6 },
                              opacity: { duration: 0.6 },
                              scale: { duration: 0.6 },
                              y: { repeat: Infinity, duration: 1.8 }
                            }
                          : animationStep === 1
                          ? { duration: 1.2, ease: "easeInOut" }
                          : {}
                      }
                      className="absolute left-6 top-12"
                    >
                      <div className="relative">
                        {/* Efecto de halo rojo */}
                        <motion.div
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3]
                          }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="absolute -inset-4 bg-red-500/30 blur-xl rounded-2xl"
                        />
                        
                        <div className="relative w-24 h-24">
                          <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-700/10 rounded-xl border border-red-500/30" />
                          <div className="relative w-full h-full p-3">
                            <Image
                              src={productImage}
                              alt={productName}
                              fill
                              className="object-contain drop-shadow-lg"
                            />
                          </div>
                          
                          {/* Efecto de brillo rojo */}
                          <motion.div
                            animate={{ 
                              x: ["-100%", "100%"],
                              opacity: [0, 0.4, 0]
                            }}
                            transition={{ 
                              duration: 1.5,
                              repeat: Infinity,
                              repeatDelay: 0.5
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/40 to-transparent"
                          />
                        </div>
                        
                        {/* Estela de movimiento roja */}
                        {animationStep === 1 && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 0.8, 0] }}
                            transition={{ duration: 1.2 }}
                            className="absolute -left-8 top-1/2 -translate-y-1/2 w-32 h-2 bg-gradient-to-r from-red-500 via-red-400 to-transparent blur-sm"
                          />
                        )}
                      </div>
                    </motion.div>
                  </div>
                )}
                
                {/* Mensaje de éxito con efecto rojo */}
                {animationStep >= 2 && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", damping: 20, stiffness: 200 }}
                    className="text-center"
                  >
                    <div className="relative mb-8">
                      {/* Anillo rojo pulsante */}
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          borderColor: ["#ef4444", "#dc2626", "#ef4444"]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="absolute inset-0 border-4 border-red-500 rounded-full"
                      />
                      
                      <div className="w-28 h-28 mx-auto bg-gradient-to-br from-red-900/30 to-black rounded-full flex items-center justify-center border border-red-500/30">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring" }}
                          className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.5)]"
                        >
                          <div className="text-white text-4xl font-black">✓</div>
                        </motion.div>
                      </div>
                      
                      {/* Efecto de explosión */}
                      <motion.div
                        initial={{ scale: 0, opacity: 0.5 }}
                        animate={{ scale: 3, opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-transparent rounded-full"
                      />
                    </div>
                  </motion.div>
                )}
                
                {/* Texto del mensaje */}
                <motion.div
                  key={`text-${animationStep}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: animationStep === 2 ? 0.3 : 0 }}
                  className="text-center"
                >
                  <h3 className="text-2xl font-black text-white mb-3 tracking-wider">
                    {animationStep < 2 ? "¡AGREGANDO AL CARRITO!" : "¡AGREGADO EXITOSAMENTE!"}
                  </h3>
                  
                  <div className="space-y-2">
                    <p className="text-red-300 font-semibold text-lg">
                      {productName}
                    </p>
                    <div className="flex justify-center gap-4 text-sm">
                      <span className="text-gray-300 bg-gray-800/50 px-3 py-1 rounded-full">
                        TALLA: <span className="text-red-400 font-bold">{size}</span>
                      </span>
                      <span className="text-gray-300 bg-gray-800/50 px-3 py-1 rounded-full">
                        CANT: <span className="text-red-400 font-bold">{quantity}</span>
                      </span>
                    </div>
                  </div>
                  
                  {/* Mensaje rojo luminoso */}
                  {animationStep >= 2 && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ 
                        scale: [0.8, 1.1, 1],
                        opacity: 1,
                        textShadow: [
                          "0 0 5px #ef4444",
                          "0 0 15px #ef4444", 
                          "0 0 5px #ef4444"
                        ]
                      }}
                      transition={{ 
                        scale: { duration: 0.5 },
                        textShadow: { repeat: Infinity, duration: 1.2 }
                      }}
                      className="mt-6 inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-red-900/30 to-black/30 border border-red-500/40 rounded-xl backdrop-blur-sm"
                    >
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,1)]" />
                      <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-red-500 text-lg">
                        ✓ PRODUCTO AGREGADO AL CARRITO
                      </span>
                    </motion.div>
                  )}
                </motion.div>
              </div>
              
              {/* Barra de carga roja en la parte inferior */}
              <div className="mt-10">
                <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                  {/* Fondo de la barra con efecto de brillo */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-red-700/20 to-red-900/20" />
                  
                  {/* Barra de progreso animada */}
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-red-500 via-red-400 to-red-600 rounded-full"
                  >
                    {/* Efecto de brillo en la barra */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                    
                    {/* Punto luminoso que se mueve */}
                    <motion.div
                      animate={{ x: ["0%", "100%"] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      className="absolute top-0 w-4 h-full bg-white/40 blur-sm"
                    />
                  </motion.div>
                  
                  {/* Borde luminoso */}
                  <div className="absolute inset-0 border border-red-500/30 rounded-full" />
                </div>
                
                {/* Texto de cierre automático */}
                <div className="mt-3 text-center">
                  <span className="text-xs text-gray-400 tracking-wider">
                    CERRANDO AUTOMÁTICAMENTE EN {Math.ceil((3000 - progress * 30) / 1000)}S
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}