import Link from "next/link"
import styles from '../styles/NoEncontrado.module.css'

const NoEncontrado = () => {
  return (
  
        <div className={styles.contenedor}>
            <h1>Error Pagina No Encontrada</h1>
            <section className={styles.error_container}>
            <span><span>4</span></span>
            <span>0</span>
            <span><span>4</span></span>
            </section>
            <div className={styles.link_container}>
                <a className={styles.more_link}>
                     <Link href="/">Volver al Inicio</Link>
                </a>
           
            </div>
        </div> 
  )
}

export default NoEncontrado
