export function ageCalculator(year, month, day) {
    // Obtenemos la fecha actual
    const today = new Date();
   
    // Creamos la fecha de nacimiento
    const birthDate = new Date(year, month - 1, day); // Restamos 1 al mes porque los meses en JavaScript son base 0

    // Calcular la edad
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth(); // Mes actual
    let ageDays = today.getDate(); // Día actual

    // Ajustar la edad si no ha llegado el cumpleaños este año
    if (ageMonths < birthDate.getMonth() || 
        (ageMonths === birthDate.getMonth() && ageDays < birthDate.getDate())) {
        ageYears -= 1;
    }

    return ageYears; // Devolver la edad calculada
}

const edad = ageCalculator(1990, 5, 15); // Por ejemplo, naciendo el 15 de mayo de 1990
console.log(`La edad es: ${edad} años`);
