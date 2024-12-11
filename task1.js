
// // // Función para calcular el costo total de una transacción
export function costCalculator(monto) {
     const tarifaFija = 3; // Tarifa fija por transacción
     const tasaInteres = 0.01; // Tasa de interés del 1%

// //     // Calcular el interés
     const interes = monto * tasaInteres;

// //     // Calcular el costo total
     const costoTotal = monto + interes + tarifaFija;

     return costoTotal; // Devolver el costo total
     return costoTotal.toFixed(2); 
 }
console.log(costCalculator(124));