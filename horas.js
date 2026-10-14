document.addEventListener('DOMContentLoaded', function() {
    let temporizador = null;
    let actual = new Date();

    let final = new Date(document.getElementById('fecha_final').innerHTML);

    let finalEs = final.toLocaleString("es-ES");
    let auxDia = finalEs.substring(0, 2);
    let auxMes = finalEs.substring(3, 5);

    let finalFinal = new Date(final.getFullYear(), parseInt(auxMes) - 1, parseInt(auxDia), final.getHours(), final.getMinutes(), final.getSeconds());
    

    alert(finalEs);
    alert(auxDia);
    alert(auxMes);
    alert(finalFinal);

    temporizador = finalFinal - actual;
    alert(new Date(temporizador));

    let segundosTotales = math.floor(temporizador / 1000);
    let minutosTotales = math.floor(segundosTotales / 60);
    let horasTotales = math.floor(minutosTotales / 60);
    let diasTotales = math.floor(horasTotales / 24);

    let horas = horasTotales % 24;
    let minutos = minutosTotales % 60;
    let segundos = segundosTotales % 60;

    document.getElementById("crono").innerHTML = diasTotales + " días, " + horas + " horas, " + minutos + " minutos y " + segundos + " segundos.";

});