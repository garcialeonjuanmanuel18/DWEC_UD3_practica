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
    alert(temporizador);

});