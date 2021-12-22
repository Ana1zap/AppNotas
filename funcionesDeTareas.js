let fs = require('fs');

let tareas =JSON.parse(fs.readFileSync('./data/tareas,json', 'utf-8'));

module.exports ={
    listar : function() {
        tareas.forEach(tareas => {
            console.log('titulo : $(tareas.titulo estado :$(tareas.estado')
            
        });
    }
}
