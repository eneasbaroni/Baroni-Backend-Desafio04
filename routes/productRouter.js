const express = require("express");
const { Router } = require("express");
const products = Router();

//importo el controller
const Contenedor = require("../controllers/products.controller")

products.get("/", (req, res) => {
  const productos = Contenedor.getAll()
  res.status(200).json(productos);
});

products.get("/:id", (req, res) => {  
  let id = req.params.id    
  let data = Contenedor.getById(id)   
  res.status(201).json(data)
});

products.post("/", (req, res) => { 
  const {title, price, thumbnail} = req.body
  const data = Contenedor.save({title, price, thumbnail})  
  res.status(201).json(data) 
});

products.delete("/:id", (req, res) => {  
  let id = req.params.id  
  const data = Contenedor.deleteById(id)  
  res.json(data) 
});

products.put("/:id", (req, res) => {  
  let id = req.params.id  
  const {title, price, thumbnail} = req.body
  const data = Contenedor.changeById(id, {title, price, thumbnail})  
  res.json(data) 
});


module.exports = products;
