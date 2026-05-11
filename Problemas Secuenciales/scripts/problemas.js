// 2.10 CONAGUA
function calcularAgua() {
    let m3 = document.getElementById('m3').value;
    let costo = document.getElementById('costo').value;
    document.getElementById('res').innerText = "Total a pagar: $" + (m3 * costo).toFixed(2);
}

// 2.11 Luz (CLS)
function calcularLuz() {
    let kw = document.getElementById('kw').value;
    let costoKW = document.getElementById('costoKW').value;
    document.getElementById('res').innerText = "Pago CLS: $" + (kw * costoKW).toFixed(2);
}

// 2.12 Descuento e IVA
function calcularArticulo() {
    let precio = parseFloat(document.getElementById('precio').value);
    let conDesc = precio * 0.80;
    let final = conDesc * 1.15;
    document.getElementById('res').innerText = `Precio con desc (20%): $${conDesc.toFixed(2)}\nPrecio final (IVA 15%): $${final.toFixed(2)}`;
}

// 2.13 Ahorro Anual
function calcularAhorro() {
    let sueldo = document.getElementById('sueldo').value;
    let ahorroSemanal = sueldo * 0.15;
    let ahorroAnual = ahorroSemanal * 4 * 12;
    document.getElementById('res').innerText = "Ahorro al año: $" + ahorroAnual.toFixed(2);
}

// 2.14 Cheque Monterrey
function calcularCheque() {
    let dias = document.getElementById('dias').value;
    let hotel = dias * parseFloat(document.getElementById('hotel').value);
    let comida = dias * parseFloat(document.getElementById('comida').value);
    let otros = dias * 100;
    document.getElementById('res').innerText = `Desglose:\nHotel: $${hotel}\nComida: $${comida}\nOtros: $${otros}\nTotal: $${hotel+comida+otros}`;
}

// 2.15 Potencia
function calcularPotencia() {
    let v = document.getElementById('v').value;
    let i = document.getElementById('i').value;
    document.getElementById('res').innerText = "Potencia: " + (v * i) + " Watts";
}

// 2.16 Área Cuadrado
function calcularCuadrado() {
    let l = document.getElementById('l').value;
    document.getElementById('res').innerText = "Área: " + (l * l);
}

// 2.17 Promedio Ponderado
function calcularPromedio() {
    let e1 = document.getElementById('e1').value * 0.25;
    let e2 = document.getElementById('e2').value * 0.25;
    let e3 = document.getElementById('e3').value * 0.50;
    document.getElementById('res').innerText = "Promedio Final: " + (e1 + e2 + e3).toFixed(2);
}

// 2.18 Vida vivida
function calcularVida() {
    let edad = document.getElementById('edad').value;
    let meses = edad * 12;
    let semanas = edad * 52;
    let dias = edad * 365;
    let horas = dias * 24;
    document.getElementById('res').innerText = `${meses} meses, ${semanas} semanas, ${dias} días y ${horas} horas aprox.`;
}

// 2.20 Hotel Cama Arena
function calcularHotel() {
    let dias = document.getElementById('diasH').value;
    let tarifa = document.getElementById('tarifa').value;
    document.getElementById('res').innerText = "Total estancia: $" + (dias * tarifa).toFixed(2);
}