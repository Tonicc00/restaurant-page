import chef from '../images/chef.jpg';
import cook from '../images/cook.jpg';
import cook2 from '../images/cook2.jpg';
import cook3 from '../images/cook3.jpg';
import dish from '../images/dish.jpg';
import rest from '../images/rest.jpg'
import slide1 from '../images/slide1.jpg';
import slide2 from '../images/slide2.jpg';


export const About = () => {
  return (
    <div className='home-div about-div'>
      <h2>The Restaurant</h2>
      <p className='about-info'>Founded in 1867, we are the oldest restaurant in town.
        We take pride in what we do and our mission is to deliver the best of what food can give you.
        Our cousine is made of all the local traditional and modern dishes
        so there is oportunity for every toung to experience the best of the tastes.
        We have great chef who is one of the worlds best experts in his field, so you know you will get
        more than you expect. 
      </p>
      <div className="gallery">
        <img className='about-img' src={chef} alt="" />
        <img src={cook} alt="" className='about-img' />
        <img src={cook2} alt="" className='about-img' />
        <img src={cook3} alt="" className='about-img' />
        <img src={dish} alt="" className='about-img' />
        <img src={rest} alt="" className='about-img' />
        <img src={slide2} alt="" className='about-img' />
        <img src={slide1} alt="" className='about-img' />
      </div>
    </div>
  )
}