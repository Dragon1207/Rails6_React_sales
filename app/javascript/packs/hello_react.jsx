// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Hello = props => (
  <div>Hello {props.name}!</div>
)

1. App Wrapper
2. Navigation bar/header
3. Jumbotron
4. Product List
5. Product
6. Footer

Components
Containers
Shared


// class Hello extends React.Component {
//   constructor(props){
//     super(props)
//   }
//   render(){
//     return (
//       <div>Hello {this.props.name}!</div>
//     )
//   }
// }

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="React" />,
    // document.body.appendChild(document.createElement('div')),
    document.getElementById('root'),
  )
})
