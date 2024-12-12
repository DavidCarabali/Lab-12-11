// Exporta la función ageCalculator para que pueda ser utilizada en otros módulos
export function ageCalculator(year, month, day) {
    // Obtenemos la fecha actual
    const today = new Date(); // Crea un objeto Date que representa la fecha y hora actuales
   
    // Creamos la fecha de nacimiento
    // Se crea un nuevo objeto Date con el año, mes (menos 1) y día proporcionados
    const birthDate = new Date(year, month - 1, day); // Restamos 1 al mes porque los meses en JavaScript son base 0

    // Calcular la edad
    // Se calcula la diferencia en años entre el año actual y el año de nacimiento
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    
    // Obtener el mes actual (0-11)
    let ageMonths = today.getMonth(); // Mes actual

    // Obtener el día actual del mes
    let ageDays = today.getDate(); // Día actual

    // Ajustar la edad si no ha llegado el cumpleaños este año
    // Comparamos el mes y el día actuales con el mes y día de nacimiento
    if (ageMonths < birthDate.getMonth() || 
        (ageMonths === birthDate.getMonth() && ageDays < birthDate.getDate())) {
        ageYears -= 1; // Si el cumpleaños no ha ocurrido aún este año, restamos 1 a la edad
    }

    return ageYears; // Devolver la edad calculada
}

// Llamamos a la función ageCalculator con una fecha de nacimiento específica (15 de mayo de 1990)
const edad = ageCalculator(1990, 5, 15); // Por ejemplo, naciendo el 15 de mayo de 1990

// Imprimimos la edad calculada en la consola
console.log(`La edad es: ${edad} años`); // Muestra "La edad es: X años" donde X es la edad calculada
