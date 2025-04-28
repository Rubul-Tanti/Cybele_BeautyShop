import React from 'react'
import { Nav } from './component/nav'
import { Hero } from './component/hero'
import { Product } from './component/product'
import { Services } from './component/services'
import { Faq } from './component/faq'
import { Socialmedia } from './component/socialmedia'
import { Footer } from './component/footer'

export const App = () => {
  const cursor = document.getElementById('cursor');

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
  });

  return (
    <main className=''>
      <div class="custom-cursor" id="cursor"></div>
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