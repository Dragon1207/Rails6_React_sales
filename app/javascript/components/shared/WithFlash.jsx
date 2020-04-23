import React from 'react'

const withFlash = (Component) => {
  return class withFlash extends React.Component {
    state = {
      toShow: true
    }

    componentDidMount = () => {
      if(this.state.toShow){
        setTimeout(() => {
          this.setState({ toShow: false })
        }, 2000)
      }
    }
    render(){
      return (
        <React.Fragment>
        { this.state.toShow ?
          <Component {...this.props} /> : null
        }
        </React.Fragment>
      )
    }
  }
}

export default withFlash
