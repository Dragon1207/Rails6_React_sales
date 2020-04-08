import React, { Component  } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import ProductList from './ProductsContainer'
import ProductDetail from './ProductDetailContainer'
import Signup from './SignupFormContainer'

class App extends Component {
  state = {
    currentUser: null
  }
  render(){
    return(
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path='/' component={ProductList}/>
            <Route path='/products/:id' component={ProductDetail} />
            <Route path='/register' component={Signup} />



            <Route render={() => (
              <div className="container">
                <div className="row">
                  <div className="card col-md-8 offset-md-2 mt-4 form-header-style">
                    <h1 className="text-center m-4">404: Not Found</h1>
                    <p className="text-center m-4">The resource you are looking for could not be found</p>
                  </div>
                </div>
              </div>
            )} />
          </Switch>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    )
  }
}


export default App
