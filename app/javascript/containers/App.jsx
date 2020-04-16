import React, { Component  } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios'

import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import ProductList from './ProductsContainer'
import ProductDetail from './ProductDetailContainer'
import Signup from './SignupFormContainer'

class App extends Component {
  state = {
    currentUser: null
  }

  componentDidMount = () => {
    this.fetchCurrentUser()
  }
  fetchCurrentUser = () => {
    axios
      .get('/api/v1/users/get_current_user.json')
      .then(response => {
        let currentUser = response.data.currentUser || null
        this.setCurrentUser(currentUser)
      })
      .catch(error => console.log(error.response.data))
  }

  setCurrentUser = (currentUser) => {
    this.setState({ currentUser })
  }

  handleSignout = (event, location, history) => {
    event.preventDefault()
    axios
      .delete('/api/v1/signout.json')
      .then(response => {
        this.setState({ currentUser: null})
        if(location.pathname !== '/'){
          history.push('/')
        }
      })
      .cath(error => console.log(error.response))
  }

  render(){
    return(
      <BrowserRouter>
        <React.Fragment>
          <Header
            currentUser={this.state.currentUser}
            onSignout={this.handleSignout}
          />
          <Switch>
            <Route exact path='/' component={ProductList}/>
            <Route path='/products/:id' component={ProductDetail} />
            <Route path='/register' render={() => (
              <Signup onFetchCurrentUser={this.fetchCurrentUser}
              currentUser={this.state.currentUser} />
            )} />

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
