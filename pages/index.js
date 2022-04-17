import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Curso from '../components/Curso'
import ListadoBlog from '../components/ListadoBlog'

const Index = ({guitarras, curso, entradas}) => {
  return (
        <Layout
          pagina = 'Tienda Virtual'
          guitarras = {guitarras[0]}
        >
           
            <main className='contenedor'>
              <h2 className='heading'>Nuestra Colección</h2>
                  <Listado
                  guitarras={guitarras}
                  />
                      
            </main> 
            <Curso
              curso={curso}
            />

            <section className='contenedor'>
              <ListadoBlog
                entradas={entradas}
              />
            </section>
           
        </Layout>
  )
}

export async function getStaticProps() {  
  

  const urlGuitarras = `${process.env.API_URL}/guitarras?_limit=3`
  const urlCurso = `${process.env.API_URL}/cursos/`
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`

  const [resGuitarras, resCurso, resBlog] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCurso),
    fetch(urlBlog)
  ]) 
  const[guitarras,curso, entradas] = await Promise.all([
    resGuitarras.json(),
    resCurso.json(),
    resBlog.json()
  ])

  return {
    props: {
      guitarras,
      curso,
      entradas
    }
  }
}

export default Index
