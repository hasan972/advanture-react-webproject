import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
    return (
        <>
            <div className='footer-container'>
                <section className='footer-subscription'>
                    <p className='footer-subscription-heading'>Join the advanture newsletter to recived our special vacation deals!</p>
                    <p className='footer-subscrittion-text'>You can unsubcribe at any time</p>
                    <div className='input-areas'>
                        <form>
                            <input className='footer-input' type='eamil' name='eamil' placeholder='Your Email' />
                            <Button buttonStyle='btn--outline'>Subscribe</Button>
                        </form>
                    </div>
                </section>
                <div className='footer-links'>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-items'>
                            <h2>Aabout Us</h2>
                            <Link to='/sign-up'>How is Works</Link>
                            <Link to='/'>Testimonial</Link>
                            <Link to='/'>Carrers</Link>
                            <Link to='/'>Investor</Link>
                            <Link to='/'>Terms of servisec</Link>
                        </div>
                        <div className='footer-link-items'>
                            <h2>Contact Us</h2>
                            <Link to='/sign-up'>Contact</Link>
                            <Link to='/'>Support</Link>
                            <Link to='/'>Destination</Link>
                            <Link to='/'>Supportership</Link>
                        </div>
                    </div>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-items'>
                            <h2>vidos</h2>
                            <Link to='/sign-up'>Submit Video</Link>
                            <Link to='/'>Ambassadors</Link>
                            <Link to='/'>Agency</Link>
                            <Link to='/'>influencer</Link>
                        </div>
                        <div className='footer-link-items'>
                            <h2>Social Media</h2>
                            <Link to='/sign-up'>Instagram</Link>
                            <Link to='/'>Facebook</Link>
                            <Link to='/'>Youtube</Link>
                            <Link to='/'>Twitter</Link>
                        </div>
                    </div>
                </div>
                <section className='social-media'>
                    <div className='social-media-wrap'>
                        <div className='footer-logo'>
                            <Link to='/' className='social-logo'>TRVEL<i className='fab fa-typo3' /></Link>
                        </div>
                        <small className='website-rights'>TRVEL @ 2021 developed by RH.Shanto</small>
                        <div className='social-icon'>
                            <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'><i className='fab fa-facebook' />
                            </Link>
                            <Link className='social-icon-link youtube' to='/' target='_blank' aria-label='Youtube'><i className='fab fa-youtube' />
                            </Link>
                            <Link className='social-icon-link twitter' to='/' target='_blank' aria-label='Twitter'><i className='fab fa-twitter' />
                            </Link>
                            <Link className='social-icon-link linkedin' to='/' target='_blank' aria-label='Linkedin'><i className='fab fa-linkedin' />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
};

export default Footer
