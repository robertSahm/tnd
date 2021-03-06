import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AddressBox from './address-box'
import LogoFooter from '../img/logo-footer.svg'
import '../styles/footer.css'
import '../styles/typography.css'
import facebookLogo from '../img/logo-facebook.svg'
import instaLogo from '../img/logo-instagram.svg'

class Footer extends Component {
  render() {
    return (
      <div className={'footer-wrap'}>

        <div className={'footer-nav-wrap'}>
          <Link className={'menu-item'} to='/'>HOME</Link>
          <Link className={'menu-item'} to='/contact'>CONTACT</Link>
          <Link className={'menu-item'} to='/underwear'>UNDERWEAR</Link>
          <Link className={'menu-item'} to='/lounge'>SLEEPWEAR&nbsp;&amp;&nbsp;LOUNGEWEAR</Link>
          <Link className={'menu-item'} to='/socks'>SOCKS</Link>
          <Link className={'menu-item'} to='/accessories'>TRAVEL ACCESSORIES</Link>
        </div>

        <div className={'footer-logo-wrap'}>
          <img className={''} src={LogoFooter} />
        </div>

        <div className={'social-wrap'}>
          <a target="_blank" href="https://www.facebook.com/trunkanddrawer/">
            <img className={'fb-logo'} src={facebookLogo}/>
          </a>
          <a target="_blank" href="https://www.instagram.com/trunkanddrawer/">
            <img src={instaLogo} />
          </a>
        </div>

        <div className={'address-row'} >
          <AddressBox />
        </div>

        <h5 className={'copyright text-gold'}>coppyright © 2017 Momentum Retail LLC</h5>
      </div>
    )
  }
}

export default Footer
