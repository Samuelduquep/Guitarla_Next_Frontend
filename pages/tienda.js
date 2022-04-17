import Layout from '../components/Layout'
import Listado from '../components/Listado'
import styles from "../styles/Tienda.module.css"

const Tienda = ({guitarras}) => {
  return (

        <Layout
            pagina = {'Tienda Virtual'}
            >

          <main className='contenedor'>
            <h2 className='heading'>Nuestra Colección</h2>

                <Listado
                guitarras={guitarras}
                />
                     
          </main>
        </Layout>

  )
}

export async function getStaticProps() {  
  

  const url = `${process.env.API_URL}/guitarras/`
  const respuesta = await fetch(url)
  const guitarras = await respuesta.json()

  return {
    props: {
      guitarras
    }
  }
}

export default Tienda
