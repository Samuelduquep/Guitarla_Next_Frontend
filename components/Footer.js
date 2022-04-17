import Link from "next/link"
import styles from "../styles/Footer.module.css"


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='contenedor'>
          <div className={styles.contenido}>
               <nav className={styles.navegacion}>
                <Link href="/">Inicio</Link>
                <Link href="/nosotros">Nosotros</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/tienda">Tienda</Link>
            </nav>
            <p className={styles.copyr}>&#169; Samuel Duque</p>
          </div>
           
      </div>
    </footer>
  )
}

export default Footer
