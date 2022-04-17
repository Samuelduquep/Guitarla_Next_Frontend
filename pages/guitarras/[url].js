
import Layout from "../../components/Layout"
import Image from "next/image"
import { useState } from "react"
import styles from "../../styles/Guitarra.module.css"


const Producto = ({guitarra, agregarCarrito}) => {

    const [cantidad, setCantidad]=useState(1)
    
    const {nombre, descripcion, precio, imagen, id} = guitarra[0]

    const handleSubmit = e =>{
      e.preventDefault()
      if(cantidad<1){
        alert('Cantidad no válida')
        return
      }

      const guitarraSeleccionada ={
        id,
        imagen: imagen.url,
        nombre,
        precio,
        cantidad 
      }
      agregarCarrito(guitarraSeleccionada)
    }


  
  return (

      <Layout
        pagina={`Guitarra ${nombre}`}
      >
        <main className="contenedor">
            <article className={styles.contenedor_guitarra}>
                <Image
                layout="responsive" 
                width={180} 
                height={350}
                src={imagen.url}
                key={imagen._id}
                />
            <div className={styles.contenido}>
                <h1 className="heading">{nombre}</h1>
                <p className={styles.texto}>{descripcion}</p>
                <p className={styles.precio}>€{precio.toString()}</p>
                
                <form className={styles.formulario} onSubmit={handleSubmit}>
                    <label>Cantidad:</label>
                    <select
                      value={cantidad}
                      onChange={e=>setCantidad(parseInt(e.target.value))}
                    >
                        <option value='0'>--Seleccione--</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                    </select>

                    <input
                        type="submit"
                        value="Agregar al Carrito"
                    />
                </form>
                
            </div>
            </article>
           
        </main>
      </Layout>
  )
}

export async function getStaticPaths(){
    const url = `${process.env.API_URL}/guitarras/`
    const respuesta = await fetch(url)
    const guitarras = await respuesta.json()
   
    const paths = guitarras.map(guitarra=>({
        params: {url: guitarra.url}
    }))

    return{
        paths,
        fallback: false
    }
}

export async function getStaticProps({params:{url}}) {  

    const urlB = `${process.env.API_URL}/guitarras?url=${url}`
    const respuesta = await fetch(urlB)
    const guitarra = await respuesta.json()

    return {
      props: {
        guitarra
      }
    }
  }


export default Producto
