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
  if (data.some(el => el.id == x)) { 
  const newObject = data.filter(el => el.id == x)
  return newObject[0]      
  } else {return ({"Error" : "Producto no Encontrado"})}  
}  

 //funcion que elimina segun id
 const deleteById = (i) => {    
  let index = data.findIndex(x => x.id == i) 
  data.splice(index, 1);
  return ("Producto Eliminado")  
} 

 //funcion que elimina segun id
 const changeById = (i, object) => { 
  let index = data.findIndex(x => x.id == i)
  object.id = i 
  data[index] = object  
  return ("Producto Reemplazado")
} 

module.exports = { list, save, getById, deleteById, changeById};

