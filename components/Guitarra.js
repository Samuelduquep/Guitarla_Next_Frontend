
import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Guitarra.module.css"

const Guitarra = ({guitarra}) => {



    const {nombre, descripcion, precio, imagen, url} = guitarra


    return (

      <article  className={styles.contenedor_guitarra}>
          <div>
              <Image 
                layout="responsive" 
                width={400} 
                height={900} 
                src={imagen.url} 
                alt={`imagen blog ${nombre}`}
                key={imagen.id}
                />
          </div>
        
    
        <div>
          <h3 className={styles.nombre}>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>€{precio.toString()}</p>
          <Link href={`/guitarras/${url}`}>
            <a className={styles.enlace}>
              Ver Producto
            </a> 
          </Link>
        </div>
      </article>
    )
  }
  
  export default Guitarra