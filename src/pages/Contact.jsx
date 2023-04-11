import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaPinterest} from 'react-icons/fa';


export const Contact = () => {
  return (
    <div className='home-div contacts'>
      <h2>The Restaurant</h2>
      <h3>Reach out to us or check our social media</h3>
      <div className='socials'>
        <a href="https://www.facebook.com" target='_blank'><FaFacebook className='social-icon' /></a>
        <a href="https://www.twitter.com" target='_blank'><FaTwitter className='social-icon' /></a>
        <a href="https://www.instagram.com" target='_blank'><FaInstagram className='social-icon' /></a>
        <a href="https://www.pinterest.com" target='_blank'><FaPinterest className='social-icon' /></a>
      </div>
      <div className='contact-info'>
        <h4>ADDRESS: </h4>
        <p>John Washington St. 256, 12530 NY</p>
        <h4>PHONE NUMBER: </h4>
        <p>+1-855-652-8956</p>
        <h4>EMAIL: </h4>
        <p>info@therestaurant.com</p>       
      </div>
    </div>
  )
}