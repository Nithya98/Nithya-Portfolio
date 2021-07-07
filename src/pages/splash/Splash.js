import React, { Component } from 'react'
import './Splash.css'
import { Redirect } from 'react-router-dom'

function AnimatedSplash(props) {
  const logo = '<Nithya Shanmugam />'
  return (
    <div className='logo_wrapper'>
      <div className='screen' style={{ backgroundColor: 'rgb(68, 6, 68)' }}>
        <img
          src='https://media.tenor.com/images/404aac88e1738c1921b06b3065a6e031/tenor.gif'
          alt='home_logo'
          width='150px'
          height='150px'
        />
        <div>
          <h1 className='logo__name' style={{ color: '#fff' }}>
            Hi There, Welcome to my portfolio👋 <br />
            {logo}
          </h1>
        </div>
      </div>
    </div>
  )
}

class Splash extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false,
    }
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 5500)
  }

  componentWillMount() {
    clearTimeout(this.id)
  }

  render() {
    return this.state.redirect ? (
      <Redirect to='/home' />
    ) : (
      <AnimatedSplash theme={this.props.theme} />
    )
  }
}

export default Splash
