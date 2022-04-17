import Layout from "../components/Layout"
import styles from "../styles/Carrito.module.css"
import Image from "next/image"
import { useState, useEffect } from "react"

const Carrito = ({carrito, actualizarCantidad, eliminarProducto}) => {

    const [total, setTotal]=useState(0)

    useEffect(() => {
     const calculoTotal = carrito.reduce((total, producto) => total + producto.cantidad * producto.precio, 0)

     setTotal(calculoTotal)
    }, [carrito])
    

  return (
    <Layout pagina={'Carrito de Compras'}>
        <h1 className="heading">Carrito</h1>
        <main className={`${styles.contenido} contenedor`}>
            <div className={styles.carrito}>
                <h2>Artículos</h2>
                {carrito.length === 0 ? 'Carrito Vacio' : (
                    carrito.map((producto)=>(
                        <div key={producto._id} className={styles.producto}>
                            <div>
                                <Image layout="responsive" width={250} height={500} src={producto.imagen} alt={producto.nombre}/>
                            </div>
                            <div className={styles.datos}>
                                <p className={styles.nombre}>{producto.nombre}</p>
                                <div className={styles.cantidad}>
                                     <p>Cantidad: </p>
                                      <select
                                        className={styles.select}
                                        value={producto.cantidad}
                                        onChange={(e)=>
                                            actualizarCantidad({
                                                cantidad: e.target.value,
                                                id: producto._id
                                            })
                                        }
                                        >
                                            <option value='1'>1</option>
                                            <option value='2'>2</option>
                                            <option value='3'>3</option>
                                        </select>
                                </div>
                               
                                <p className={styles.precio}>Precio: €<span>{producto.precio}</span> </p>
                                <p className={styles.subtotal}>Subtotal: € <span>{producto.precio * producto.cantidad}</span></p>
                                <div
                                className={styles.eliminar}
                                onClick={() => eliminarProducto(producto)}
                                    > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg></div>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className={styles.resumen}>
                {total > 0 ? (
                    <>
                        <h3>Resumen del Pedido</h3>
                        <p>Total a pagar: € {total} </p>
                    </>
                ) : <p>No hay productos en el carrito</p>}
            </div>
        </main>
    </Layout>
  )
}

export default Carrito
