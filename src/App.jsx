import React from 'react'
import { Nav } from './component/nav'
import { Hero } from './component/hero'
import { Product } from './component/product'
import { Services } from './component/services'
import { Faq } from './component/faq'
import { Socialmedia } from './component/socialmedia'
import { Footer } from './component/footer'

export const App = () => {


  return (
    <main className=''>
      <Nav/>
      <Hero/>
      <Product/>
      <Services/>
      <Socialmedia/>
      <Faq/>
      <Footer/>
    </main>
  )
}
export default App