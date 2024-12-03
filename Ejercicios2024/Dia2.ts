/*

Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, 
pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar 
este marco mágico.

Reglas:

    Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
    Cada nombre debe estar en una línea, alineado a la izquierda.
    El marco está construido con * y tiene un borde de una línea de ancho.
    La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.



*/


function createFrame(names: string[]): string {
    // Code here
    let total:number[] = [];
    let nombresString: string[] = []


    for(let name of names){
        total.push(name.length)  //se uso un nuevo arreglo para agregar la longitud de cada nombre
    }


    let maximo = Math.max.apply(null, total);  //se usro math.max para entcontrar el valor mas alto del arreglo, con la ayuda de apply que se usa para pasar un arreglo a una funcion

    
    
    let asteriscos = "*".repeat(maximo + 4) //se uso reapeat para tener el patron de asteriscos 

    nombresString.push(asteriscos)  //se agregalo al nuevo arreglo de nombres todo los asteriscos iniciales 
    names.forEach((elementos) => {

        let verEspiocs = maximo - elementos.length   //se uso para validar los espacio que se necesitan para alinear los nombres y el asterisco final 
        nombresString.push(`* ${elementos} ${" ".repeat(verEspiocs)}*`)  //se agrego al nuevo arreglo de nombres y los espacio conrespondiente 

    })

    return nombresString.join('\n') + '\n' + asteriscos   //se uso join para hacer los saltos de linea 

}