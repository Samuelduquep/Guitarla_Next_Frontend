import Guitarra from "./Guitarra"
import styles from "../styles/Tienda.module.css"


const Listado = ({guitarras}) => {
    
    return (

      <div className={styles.tienda}>
       {
         guitarras.map(guitarra=>(
             <Guitarra
                key={guitarra.id}
                guitarra={guitarra}
             />
         ))
       }
      </div>

    )
  }
  
  export default Listado