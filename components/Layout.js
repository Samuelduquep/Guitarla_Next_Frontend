import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children, pagina, guitarras, carrito}) => {
  return (
    <div>
       <Head>
        <title>Guitar LA - {pagina}</title>
        <meta name="description" content="Sitio web de venta de guitarras" />
        <link rel="icon" href="/LogoS.svg" />
      </Head>
      <Header
      guitarras={guitarras}
      />
      {children}
      <Footer/>
    </div>
  )
}

Layout.defaultProps = {
  guitarra: null
}

export default Layout
