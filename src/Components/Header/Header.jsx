import React from 'react'
import "./Header.css"
import Navbar from '../Navbar/Navbar'
import headerImg from"../../assets/products-new.png"
import lightImg from "../../assets/image-1382.png"
import flavor from "../../assets/C-icon1.png"
import vape from "../../assets/C-icon2.png"
import wire from "../../assets/C-icon3.png"
const Header = () => {

const Cards=[
  {img:flavor,class:"card-one", title:"E-Liquids",subtitle:"Secure payment method"},
  {img:vape,  class:" card-two",   title:"Vape kits",subtitle:"Secure payment method"},
  {img:wire,  class:" card-three",   title:"Accessories",subtitle:"Secure payment method"},
]

const Cardrender=(card,index)=>{
  return(
    <div className={card.class}>
      <div><img className='w-20  mx-5' src={card.img} alt="" /></div>
      <div className='card-info '>
        <h3 className='card-title'>{card.title}</h3>
        <p className='card-subtitle'>{card.subtitle}</p>
        <a  className=' card-link ' href="#">Learn More</a>
      </div>
    </div>
  )
}
  return (
    <div className='Header'>

      <section id='header' className=''>
{/*grid content*/}
<div className='header-container gap-6 justify-items-center pt-24 sm:items-center md:items-center mx-auto  grid md:gird-cols-2 lg:w-12/12 lg:grid-cols-2 mb-24 overflow-hidden   '>
{/* //left_content */}
<div className='mx-12 left_content '>
  <div className='flex green-text lg:justify-start md:justify-start sm:justify-center mb-8'>
  <img className="w-5 " src={lightImg} alt="" /> <h3 className='mx-3 text-green-400 tracking-wider font-bold'> GET 25% OFF NOW</h3>
  </div>
  <h1 className='md:text-7xl   text-7xl font-bold  text-white tracking-wider'>Let’s vaping <br /> together</h1>
<p className='text-gray-400 text-lg mt-6 tracking-widest font-light leading-8'>Our vape shop is not only a variety of vaping products, but also an operational support service.</p>

<a href="#" className='CTA mt-12'>Shop Now</a>
</div>

{/* //right_content */}
<div className='vape_bg '>
  <div><img className=' w-5/6 vape ' src={headerImg} alt="" /></div>
</div>


  </div>
        {/* //Card section// */}
        <div className="cards ">
       {Cards.map(Cardrender)}
        </div> 
      </section>
      
    </div>
  )
}

export default Header