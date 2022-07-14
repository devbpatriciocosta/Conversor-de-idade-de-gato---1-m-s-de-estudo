function Converter() {
    let idadeGato = document.getElementById('valor').value;
    let idadeHumano = 0;
    let x = 0;

    if (idadeGato == 1) {
        idadeHumano = idadeGato * 15;
    }
    if (idadeGato == 2) {
        idadeHumano = 15 + 9;
    }
    if (idadeGato >= 3) {
        x = idadeGato - 2;
        x *= 4;
        idadeHumano = 15 + 9 + x;
    }

    document.getElementById('idadeConvertida').innerHTML = idadeGato + " anos de gato são " + idadeHumano + " anos de humano";

}