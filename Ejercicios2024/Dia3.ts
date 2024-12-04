
/*
Fácil

Santa Claus 🎅 está revisando el inventario de su taller para preparar
la entrega de regalos. Los elfos han registrado los juguetes en un array de 
objetos, pero la información está un poco desordenada. Necesitas ayudar a 
Santa a organizar el inventario.

Recibirás un array de objetos, donde cada objeto representa un juguete
y tiene las propiedades:

    name: el nombre del juguete (string).
    quantity: la cantidad disponible de ese juguete (entero).
    category: la categoría a la que pertenece el juguete (string).

Escribe una función que procese este array y devuelva un objeto que organice
los juguetes de la siguiente manera:

    Las claves del objeto serán las categorías de juguetes.
    Los valores serán objetos que tienen como claves los nombres de los juguetes 
    y como valores las cantidades totales de cada juguete en esa categoría.
    Si hay juguetes con el mismo nombre en la misma categoría, debes sumar sus 
    cantidades.
    Si el array está vacío, la función debe devolver un objeto vacío {}.



*/






type Inventory = Array<
    { name: string, quantity: number, category: string }
>

function organizeInventory(inventory: Inventory): object {
  // Code here
    
    const userMap = inventory.reduce((acc, item) => {  //se uso recude para recorrer el array y crear un objeto con las categorias 
        
        if (!acc[item.category]) {   //si no existe la categoria la crea
            acc[item.category] = {};
        }
    
        
        if (acc[item.category][item.name]) {   //si existe el nombre de la producto suma la cantidad de dicha categoria 
            acc[item.category][item.name] += item.quantity;
        } else {
            
            acc[item.category][item.name] = item.quantity;  //si no existe el nombre de la nombre asigna la cantidad 
        }
    
        return acc;  //retonar el objeto 
    }, {} as Record<string, Record<string, number>>);   //se inicializa el obeto vacio 


    
    return userMap
}
