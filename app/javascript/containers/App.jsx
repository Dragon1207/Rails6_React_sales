import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import Jumbotron from '../components/products/Jumbotron'
import ProductList from './ProductsContainer'

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={ProductList}/>        
      </Switch>
      <Footer />
    </React.Fragment>
  </BrowserRouter>
)


export default App
