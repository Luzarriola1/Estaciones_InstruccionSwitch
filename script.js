
function fechaestacion(estaciones){




switch(estaciones){

case 'invierno':

return 'Usted eligio la estacion: ' + estaciones + '\nInvierno: Inicia el 21 de junio y finaliza el 22 de septiembre';

case 'primavera':

return 'Usted eligio la estacion: ' + estaciones + '\nPrimavera: Inicia el 22 de septiembre y finaliza el 21 de diciembre';

case 'verano':

return 'Usted eligio la estacion: '+ estaciones + '\nVerano: Inicia el 21 de diciembre y finaliza el 21 de marzo';

case 'otoño':

return 'Usted eligio la estacion: '+ estaciones+ '\nOtoño: Inicia el 21 de marzo y finaliza el 21 de junio';

default:
    alert("¡ERROR! \nNo ingreso una estacion");


}

}

var estaciones=prompt("Escriba el nombre de la estacion en minusculas: ");
let resultado= fechaestacion(estaciones);
alert(resultado);







