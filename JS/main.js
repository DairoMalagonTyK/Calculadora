const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

// Función para formatear números con separadores de miles
function formatearNumero(numero) {
    return parseFloat(numero).toLocaleString("en-US");
}

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "=") {
            try {
                const resultado = eval(display.value.replace(/,/g, '')); 
                display.value = formatearNumero(resultado); 
            } catch (error) {
                display.value = "Error"; 
            }
        } else if (btn.id === "ac") {
            display.value = ""; 
        } else if (btn.id === "de") {
            display.value = display.value.slice(0, -1); 
        } else {
            if (/\d/.test(btn.id) || btn.id === ".") {
                const partes = display.value.split(/[\+\-\*\/]/);
                const ultimoNumero = partes[partes.length - 1];
                if (btn.id === "." && ultimoNumero.includes(".")) {
                    return; 
                }
            }
            display.value += btn.id;
        }
    });
});

