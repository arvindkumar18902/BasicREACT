import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Linkedin</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link className="social-icon-link instagram" to='/' target="_blank" aria_labels="Instagram">
              <i class='fab fa-instagram' />
            </Link>
            <Link className="social-icon-link linkedin" to='/' target="_blank" aria_labels="Linkedin">
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
