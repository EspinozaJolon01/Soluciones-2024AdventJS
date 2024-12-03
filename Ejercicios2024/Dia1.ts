

/**
Santa Claus 🎅 ha recibido una lista de números mágicos que representan regalos 🎁, 
pero algunos de ellos están duplicados y deben ser eliminados para evitar confusiones. 
Además, los regalos deben ser ordenados en orden ascendente antes de entregárselos a los elfos.

Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados) y 
devuelva una nueva lista sin duplicados, ordenada en orden ascendente.
 */


function prepareGifts(gifts: number[]): number[]{
    
    let dublicado: number[] = [] // se creo una lista vacia
    
    dublicado = Array.from(new Set(gifts));  // se elimina los duplicados haciendo uso de un set
    return dublicado.sort((a,b) => a-b);  // se ordena la lista de menor a mayor 
    
}




