import React from 'react'

import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import Jumbotron from '../components/products/Jumbotron'
import ProductList from './ProductsContainer'

const App = () => (
  <div>
    App Component
    <Header />
    <Jumbotron />
    <ProductList />
    <Footer />

  </div>
)


export default App
