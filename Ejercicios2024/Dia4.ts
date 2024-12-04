
/*

¡Es hora de poner el árbol de Navidad en casa! 🎄 Pero este año queremos que sea especial. Vamos a crear una función que
recibe la altura del árbol (un entero positivo entre 1 y 100) y un carácter especial para decorarlo.

La función debe devolver un string que represente el árbol de Navidad, construido de la siguiente manera:

    El árbol está compuesto de triángulos de caracteres especiales.
    Los espacios en blanco a los lados del árbol se representan con guiones bajos _.
    Todos los árboles tienen un tronco de dos líneas, representado por el carácter #.
    El árbol siempre debe tener la misma longitud por cada lado.
    Debes asegurarte de que el árbol tenga la forma correcta usando saltos de línea \n para cada línea.


    Ejemplos:
            const tree = createXmasTree(5, '*')
            console.log(tree)
            /*
            ____*____
            ___***___
            __*****__
            _*******_
            *********
            ____#____
            ____#____
            
            
            const tree2 = createXmasTree(3, '+')
            console.log(tree2)
            /*
            __+__
            _+++_
            +++++
            __#__
            __#__
            
            
            const tree3 = createXmasTree(6, '@')
            console.log(tree3)
            /*
            _____@_____
            ____@@@____
            ___@@@@@___
            __@@@@@@@__
            _@@@@@@@@@_
            @@@@@@@@@@@
            _____#_____
            _____#_____
            
            
*/








function createXmasTree(height: number, ornament: string): string {
    /* Code here */

    let arbol:string = ''
    if(height>=1 && height<=100){    //validar que la altura no sea menor a 1 ni mayor a 100
        for (let index = 1; index < 100; index++) {  //recorremos la altura del arbol 
            arbol += '_'.repeat(height-index) + ornament.repeat(index*2-1) + '_'.repeat(height-index)+'\n'  //se uso repat para repetir el caracter de los adornos y su espeacio 
                                                                                                            //height-index para que que vaya reduciendo el espacio del adrno 
                                                                                                            //index*2-1 pra que vaya aumentando el numero de adornos 
            if(index == height){   //cuando llegue a la algura del arbol se agrega el trono 


                arbol += '_'.repeat(height - 1) + "#".repeat(1) + '_'.repeat(height -1) + '\n'     //se agregar el tronco 
                arbol += '_'.repeat(height - 1) + "#".repeat(1) + '_'.repeat(height - 1) 
                break
                
            }
            
        }
    }else{
        arbol = 'Altura no permitida al sistema '  //si la altura no es valida se muestra este mensaje 
    } 
    

    return arbol   //retonarmos el arbol 

    
    }