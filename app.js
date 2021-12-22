const fs =require('fs');
const process = require('process');
let comando = process.argv[2];
const titulo = process.argv[3];
const estado = process.argv[4];
let tareas = JSON.parse(fs.readFileSync('./data/tareas.JSON', 'utf-8'));

switch (comando) {
    case "crear" :
       tareas.crear(titulo, estado);
        break;
    case "listar" :
        tareas.listar();
    break;
    case 'filtrar':
    if(tareas.filtrarTareas(process.argv[3]).length == 0){
        console.log('No hay resultados para tu búsqueda');
    }else{
        console.log(tareas.filtrarTareas(process.argv[3]));
    }
    case undefined :
     console.log("Atención Tienes que pasar una acción");
    break;
    default  : 
     console.log("No entiendo que quieres hacer");
    break;}