import React, { Component } from 'react'
import './footer.css'
import { Link } from 'react-router-dom'


class Footer extends Component {
  render() {
    return(
      <div className={'footer-container'} id={'footer'}>
        <div className={'titles-container'}>
          <div className="footer-sections col-md-12 col-lg-4 sm-m-15px-tb md-m-30px-b">
            <h4>About Us</h4>
            <p className={'about-content'}>
              At PaySplit, we want to simplify
              the experience of splitting a check.
              We're trying to reduce the complexity
              of the persons collecting payment, and the
              persons trying to pay.
            </p>
          </div>
          <div className="footer-sections col-md-12 col-lg-4 sm-m-15px-tb md-m-30px-b">
            <h4>Product</h4>
            <a className={'footer-feat'} href="#info">Features</a>
            <Link  className={'footer-mailgun'} to={'/contact'}><h4>Contact Us</h4></Link>
          </div>
          <div className="footer-sections col-md-12 col-lg-4 sm-m-15px-tb md-m-30px-b">
            <h4>Subscribe</h4>
            <p>Sign up for our news letter</p>
            <div className={'input-section'}>
              <form action="/api/emails/join" method="POST">
              <input className={'email-input'} name="email" placeholder={'enter email'}></input>
              <input type="submit" className={'btn-submit'}/>
              </form>
            </div>
          </div>

        </div>
        <hr/>
        <p className={'footer-text'}>Copyright © 2018 PaySplit Inc. All rights reserved.</p>
      </div>
    )
  }
}

export default Footer;
