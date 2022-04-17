import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Header.module.css"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"

const Header = ({guitarras}) => {

  const [car, setCar]= useState([])
 
  useEffect(()=>{
    const carritoLocalStorage = JSON.parse(localStorage.getItem('carrito')) ?? [];
    setCar(carritoLocalStorage)
  },[])

  const router = useRouter()
  return (
    <header className={styles.header}>
      <div className='contenedor'>
           <div className={styles.barra}>
                <Link href="/"> 
                <a>
                   <Image className={styles.imagen} width={400} height={100}  src="/img/logo.svg" alt="Imagen Logo"/>
                </a>
                       
                </Link>
                <nav className={styles.navegacion}>
                    <Link href="/">Inicio</Link>
                    <Link href="/nosotros">Nosotros</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/tienda">Tienda</Link>
                    <Link href="/carrito">
                        <a>
                          <div className={styles.caja_carrito}>
                          <Image layout="fixed" width={30} height={25} src="/img/carrito.png" alt="Imagen Carrito"/>
                          {car.length===0 ? null : <p>{car.length}</p>}
                          </div>
                        </a>
                    </Link>
                </nav>
           </div>
           {guitarras && (
             <div className={styles.modelo}>
               <h1>Modelo {guitarras.Nombre}</h1>
               <p className={styles.descripcion}>{guitarras.descripcion}</p>
               <p className={styles.precio}>€{guitarras.precio}</p>
               <Link href={`/guitarras/${guitarras.url}`}>
                <a className={styles.enlace}>
                  Ver producto
                </a>
               </Link>
             </div>
           )}
      </div>
      {router.pathname === '/' && (
        <div className={styles.guitarra}>
          <Image width={550} height={1200}  src="/img/header_guitarra.png" alt="Imagen Guitarra Header"/>
        </div>
          
      )}
    </header>
  )
}

export default Header
