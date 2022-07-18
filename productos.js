const data = [];
let id = 0;

//funcion para mostrar todos los productos
const list = () => {
  return data;
}  

//funcion para guardar un producto
const save = (object) => {
  id ++      
  object.id = id 
  data.push(object) 
  return object
}  

 //funcion para obtener producto segun ID
const getById = (x) => {    
  if (data.length === 0) {return ({"Error" : "Archivo Vacio"})} 
  return (data.find(el => el.id == x) || { error: 'Producto no encontrado' })  
}  

 //funcion que elimina segun id
 const deleteById = (i) => {    
  let index = data.findIndex(x => x.id == i) 
  if (index == -1) {
    return "Producto no Encontrado"
  }  
  data.splice(index, 1);
  return ("Producto Eliminado")  
} 

 //funcion que cambia producto segun id
 const changeById = (i, object) => { 
  let index = data.findIndex(x => x.id == i)
  if (index == -1) {
    return "Producto no Encontrado"
  }  
  object.id = i 
  data[index] = object  
  return ("Producto Reemplazado")
} 

module.exports = { list, save, getById, deleteById, changeById};

