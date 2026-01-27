"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { 
  CreditCard, 
  Smartphone,
  Check,
  Copy,
  Wallet
} from "lucide-react";
import { Button } from "@/components/ui/button";

type MetodoPago = "paypal" | "sinpemovil" | "bac";

interface CuentaInfo {
  tipo: MetodoPago;
  nombre: string;
  numero: string;
  referencia?: string;
}

export default function MetodosPago() {
  const [metodoSeleccionado, setMetodoSeleccionado] = useState<MetodoPago>("paypal");
  const [bubblePosition, setBubblePosition] = useState({ x: 0, width: 0 });
  
  const paypalRef = useRef<HTMLButtonElement>(null);
  const sinpemovilRef = useRef<HTMLButtonElement>(null);
  const bacRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const cuentas: Record<MetodoPago, CuentaInfo> = {
    paypal: {
      tipo: "paypal",
      nombre: "Kendall Ortiz López",
      numero: "Kendallortizlopez@gmail.com",
      referencia: "Transferencia PayPal"
    },
    sinpemovil: {
      tipo: "sinpemovil",
      nombre: "Kendall Ortiz López",
      numero: "71880901", 
      referencia: "Sinpe Móvil - Kendall Ortiz López"
    },
    bac: {
      tipo: "bac",
      nombre: "SLIPERY S.L.",
      numero: "CR18010200009510484120",
      referencia: "Banco BAC - Cuenta Corriente"
    }
  };

  useEffect(() => {
    const updateBubblePosition = () => {
      let elemento: HTMLButtonElement | null = null;
      
      switch (metodoSeleccionado) {
        case "paypal":
          elemento = paypalRef.current;
          break;
        case "sinpemovil":
          elemento = sinpemovilRef.current;
          break;
        case "bac":
          elemento = bacRef.current;
          break;
      }
      
      if (elemento && containerRef.current) {
        const rect = elemento.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        
        setBubblePosition({
          x: rect.left - containerRect.left,
          width: rect.width
        });
      }
    };

    const timer = setTimeout(updateBubblePosition, 50);
    window.addEventListener('resize', updateBubblePosition);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateBubblePosition);
    };
  }, [metodoSeleccionado]);

  const copiarAlPortapapeles = (texto: string) => {
    navigator.clipboard.writeText(texto)
      .then(() => {
        alert("¡Copiado al portapapeles!");
      })
      .catch(err => {
        console.error('Error al copiar: ', err);
      });
  };

  const cuentaActual = cuentas[metodoSeleccionado];

  return (
    <div className="w-full">
      {/* Encabezado compacto */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-white mb-1">
          Transferir a:
        </h3>
        <p className="text-gray-400 text-xs">
          Selecciona el método de transferencia
        </p>
      </div>

      {/* Botones de selección con efecto burbuja */}
      <div 
        ref={containerRef}
        className="relative bg-gradient-to-br from-gray-900 to-black rounded-lg p-0.5 mb-4 border border-gray-800"
      >
        {/* Efecto burbuja */}
        <motion.div
          animate={{
            x: bubblePosition.x,
            width: bubblePosition.width
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25
          }}
          className="absolute top-0.5 bottom-0.5 rounded-md bg-gradient-to-r from-red-600/30 to-red-800/20 border border-red-500/30"
        />

        {/* Botones de métodos */}
        <div className="grid grid-cols-3 gap-1 relative z-10">
          <button
            ref={paypalRef}
            onClick={() => setMetodoSeleccionado("paypal")}
            className={`flex items-center justify-center p-3 rounded-md transition-all duration-200 ${
              metodoSeleccionado === "paypal" 
                ? "text-white" 
                : "text-gray-400 hover:text-gray-300"
            }`}
          >
            <div className="flex items-center gap-2">
              <div className={`p-1.5 rounded-full ${metodoSeleccionado === "paypal" ? "bg-blue-500/20" : "bg-gray-800"}`}>
                <Wallet className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium">PayPal</span>
            </div>
          </button>

          <button
            ref={sinpemovilRef}
            onClick={() => setMetodoSeleccionado("sinpemovil")}
            className={`flex items-center justify-center p-3 rounded-md transition-all duration-200 ${
              metodoSeleccionado === "sinpemovil" 
                ? "text-white" 
                : "text-gray-400 hover:text-gray-300"
            }`}
          >
            <div className="flex items-center gap-2">
              <div className={`p-1.5 rounded-full ${metodoSeleccionado === "sinpemovil" ? "bg-green-500/20" : "bg-gray-800"}`}>
                <Smartphone className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium">Sinpe</span>
            </div>
          </button>

          <button
            ref={bacRef}
            onClick={() => setMetodoSeleccionado("bac")}
            className={`flex items-center justify-center p-3 rounded-md transition-all duration-200 ${
              metodoSeleccionado === "bac" 
                ? "text-white" 
                : "text-gray-400 hover:text-gray-300"
            }`}
          >
            <div className="flex items-center gap-2">
              <div className={`p-1.5 rounded-full ${metodoSeleccionado === "bac" ? "bg-purple-500/20" : "bg-gray-800"}`}>
                <CreditCard className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium">BAC</span>
            </div>
          </button>
        </div>
      </div>

      {/* Información de cuenta COMPACTA */}
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-4 border border-gray-800">
        {/* Encabezado de información */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <div className={`p-1.5 rounded ${metodoSeleccionado === "paypal" ? "bg-blue-500/20" : metodoSeleccionado === "sinpemovil" ? "bg-green-500/20" : "bg-purple-500/20"}`}>
              {metodoSeleccionado === "paypal" && <Wallet className="w-4 h-4 text-blue-400" />}
              {metodoSeleccionado === "sinpemovil" && <Smartphone className="w-4 h-4 text-green-400" />}
              {metodoSeleccionado === "bac" && <CreditCard className="w-4 h-4 text-purple-400" />}
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">
                {metodoSeleccionado === "paypal" ? "PayPal" :
                 metodoSeleccionado === "sinpemovil" ? "Sinpe Móvil" : "Banco BAC"}
              </h4>
              <p className="text-gray-400 text-xs">
                Datos para transferencia
              </p>
            </div>
          </div>
          <div className="px-2 py-0.5 bg-red-500/10 border border-red-500/20 rounded text-xs text-red-400">
            Activo
          </div>
        </div>

        {/* Tabla de datos compacta */}
        <div className="space-y-3">
          {/* Fila 1: Nombre/Titular */}
          <div className="flex items-start">
            <div className="w-1/3">
              <span className="text-gray-400 text-xs font-medium">
                {metodoSeleccionado === "paypal" ? "Email PayPal" :
                 metodoSeleccionado === "sinpemovil" ? "Titular" : 
                 "Empresa"}
              </span>
            </div>
            <div className="flex-1 flex items-center justify-between bg-gray-800/30 rounded px-3 py-2 border border-gray-700">
              <span className="text-white text-sm truncate mr-2">{cuentaActual.nombre}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copiarAlPortapapeles(cuentaActual.nombre)}
                className="h-6 w-6 p-0 hover:bg-gray-700 flex-shrink-0"
              >
                <Copy className="w-3 h-3" />
              </Button>
            </div>
          </div>

          {/* Fila 2: Número/Referencia */}
          <div className="flex items-start">
            <div className="w-1/3">
              <span className="text-gray-400 text-xs font-medium">
                {metodoSeleccionado === "paypal" ? "Para transferir" :
                 metodoSeleccionado === "sinpemovil" ? "Número" : 
                 "Cuenta"}
              </span>
            </div>
            <div className="flex-1 flex items-center justify-between bg-gray-800/30 rounded px-3 py-2 border border-gray-700">
              <span className="text-white text-sm font-mono truncate mr-2">{cuentaActual.numero}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copiarAlPortapapeles(cuentaActual.numero)}
                className="h-6 w-6 p-0 hover:bg-gray-700 flex-shrink-0"
              >
                <Copy className="w-3 h-3" />
              </Button>
            </div>
          </div>

          {/* Fila 3: Referencia adicional (si existe) */}
          {cuentaActual.referencia && (
            <div className="flex items-start">
              <div className="w-1/3">
                <span className="text-gray-400 text-xs font-medium">
                  Referencia
                </span>
              </div>
              <div className="flex-1 flex items-center justify-between bg-gray-800/30 rounded px-3 py-2 border border-gray-700">
                <span className="text-white text-sm truncate mr-2">{cuentaActual.referencia}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copiarAlPortapapeles(cuentaActual.referencia!)}
                  className="h-6 w-6 p-0 hover:bg-gray-700 flex-shrink-0"
                >
                  <Copy className="w-3 h-3" />
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Instrucciones compactas */}
        <div className="mt-4 pt-3 border-t border-gray-800">
          <div className="flex items-start gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-2 h-2 text-red-400" />
            </div>
            <div>
              <p className="text-gray-300 text-xs font-medium mb-1">Instrucciones:</p>
              <ul className="text-gray-400 text-xs space-y-0.5">
                {metodoSeleccionado === "paypal" && (
                  <>
                    <li>1. Envía el pago al email indicado</li>
                    <li>2. Usa tu número de pedido como referencia</li>
                  </>
                )}
                {metodoSeleccionado === "sinpemovil" && (
                  <>
                    <li>1. Realiza transferencia al número indicado</li>
                    <li>2. Toma screenshot del comprobante</li>
                  </>
                )}
                {metodoSeleccionado === "bac" && (
                  <>
                    <li>1. Transfiere a la cuenta indicada</li>
                    <li>2. Usa tu número de pedido como referencia</li>
                  </>
                )}
                <li>3. Envía el comprobante por WhatsApp</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Nota importante ultra compacta */}
        <div className="mt-3 pt-3 border-t border-gray-800">
          <div className="flex items-start gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
            </div>
            <p className="text-gray-400 text-xs">
              <span className="text-red-400 font-medium">Importante:</span> Después de transferir, envía el comprobante por WhatsApp para procesar tu pedido.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}