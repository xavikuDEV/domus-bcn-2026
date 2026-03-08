"use client";

import { useState, useMemo } from "react";

interface MortgageCalculatorProps {
  precio: number;
}

export default function MortgageCalculator({ precio }: MortgageCalculatorProps) {
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [interestRate, setInterestRate] = useState(2.5);
  const [years, setYears] = useState(30);

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(val);

  const calculations = useMemo(() => {
    const principal = precio * (1 - downPaymentPct / 100);
    const loanAmount = Math.max(0, principal);
    
    // Formula: M = P [ i(1 + i)^n ] / [ (1 + i)^n - 1 ]
    const monthlyRate = (interestRate / 100) / 12;
    const numPayments = years * 12;

    let monthlyPayment = 0;
    if (monthlyRate > 0 && numPayments > 0) {
      monthlyPayment = 
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
        (Math.pow(1 + monthlyRate, numPayments) - 1);
    } else if (numPayments > 0) {
      monthlyPayment = loanAmount / numPayments;
    }

    return {
      loanAmount,
      monthlyPayment,
      downPaymentAmount: precio - loanAmount
    };
  }, [precio, downPaymentPct, interestRate, years]);

  return (
    <section className="mt-8 border-t border-gray-100 pt-6 no-print">
      <h2 className="mb-6 text-lg font-bold uppercase tracking-wider text-brand-black flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-brand-blue">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
        Calculadora de Cuota
      </h2>
      
      <div className="rounded-lg border border-gray-100 bg-gray-50/50 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Controls */}
          <div className="flex flex-col gap-5">
            <div>
              <div className="flex justify-between mb-1">
                <label className="text-sm font-semibold text-brand-gray-dark">Entrada ({downPaymentPct}%)</label>
                <span className="text-sm text-brand-black font-bold">{formatCurrency(calculations.downPaymentAmount)}</span>
              </div>
              <input 
                type="range" 
                min="0" max="100" step="5"
                value={downPaymentPct} 
                onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                className="w-full accent-brand-blue"
              />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <label className="text-sm font-semibold text-brand-gray-dark">Interés Anual</label>
                <span className="text-sm text-brand-black font-bold">{interestRate}%</span>
              </div>
              <input 
                type="range" 
                min="0.5" max="7" step="0.1"
                value={interestRate} 
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-brand-blue"
              />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <label className="text-sm font-semibold text-brand-gray-dark">Plazo</label>
                <span className="text-sm text-brand-black font-bold">{years} años</span>
              </div>
              <input 
                type="range" 
                min="5" max="40" step="1"
                value={years} 
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full accent-brand-blue"
              />
            </div>
          </div>

          {/* Results */}
          <div className="flex flex-col justify-center items-center bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gray mb-2">Cuota Estimada</span>
            <span className="text-4xl font-black text-brand-blue mb-1">
              {formatCurrency(calculations.monthlyPayment)}<span className="text-xl text-brand-gray-dark font-medium">/mes</span>
            </span>
            <span className="text-sm text-brand-gray-dark mt-4 text-center">
              Financiación de {formatCurrency(calculations.loanAmount)}
            </span>
            <div className="mt-6 w-full">
               <button className="w-full bg-brand-black text-white py-3 rounded text-sm font-bold uppercase tracking-wider transition-opacity hover:opacity-80">
                 Solicitar Estudio
               </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
