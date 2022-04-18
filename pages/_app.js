import '../styles/normalize.css'
import '../styles/globals.css'
import { useState, useEffect } from 'react'
import Layout from '../components/Layout'


function MyApp({ Component, pageProps }) {

  const [carrito, setCarrito]= useState([])

  useEffect(()=>{
    const carritoLocalStorage = JSON.parse(localStorage.getItem('carrito')) ?? [];
    setCarrito(carritoLocalStorage)
  },[])

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito])
  

  const agregarCarrito = producto => { 
   
    if(carrito.some((articulo) => articulo.id === producto.id  && articulo.cantidad === producto.cantidad)){
      alert('Articulo ya está en el carrito')
    
    } else if (carrito.some((articulo) => articulo.id === producto.id && articulo.cantidad !== producto.cantidad)){
      alert('Carrito Actualizado')
      const carritoActualizado = carrito.map((articulo)=> {
        if(articulo.id === producto.id){
          articulo.cantidad = producto.cantidad;
        }

        return articulo
      })

      setCarrito(carritoActualizado)
    }
    else {
      setCarrito([...carrito, producto])
      alert('Articulo Agregado al Carrito')
    }
  }

  const actualizarCantidad = (producto) =>{
    const carritoActualizado = carrito.map((articulo)=> {
      if(articulo._id === producto._id){
        articulo.cantidad = producto.cantidad;
      }

      return articulo
    })

    setCarrito(carritoActualizado)
  }

  const eliminarProducto = producto => {
    const opcion = confirm(`Deseas Eliminar el Articulo  ${producto.nombre}`);
      if (opcion == true) {
          const carritoActualizado = carrito.filter(articulo => articulo.id !== producto.id )
          setCarrito(carritoActualizado)
          alert("Articulo Eliminado")
    } else {
        return
    }
  }

  return<Component {...pageProps} carrito={carrito} agregarCarrito={agregarCarrito} actualizarCantidad={actualizarCantidad} eliminarProducto = {eliminarProducto} />
}

export default MyApp
