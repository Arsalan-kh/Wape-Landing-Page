import React from 'react'
import "./Card.css"
import shopProdcutImg from "../../assets/shop-product-2.png"


const Card = () => {

  const ProductCards=[
    {img:shopProdcutImg,   title:"Mr Vapo E-Liquids 30ml",   pricetag:"$4.50"},
    {img:shopProdcutImg,   title:"Starter kits",                pricetag:"$54.00"},
    {img:shopProdcutImg,   title:"Starter kits",                pricetag:"$54.00"},
    {img:shopProdcutImg,   title:"Starter kits",                pricetag:"$54.00"},
    {img:shopProdcutImg,   title:"Starter kits",                pricetag:"$54.00"},
    {img:shopProdcutImg,   title:"Accessories",              pricetag:"$267.00"},
  ]
  
  const Cardrender=(card,index)=>{
    return(
        <div className='product_card_body bg-black'>
<img className='w-56 ' src={card.img} alt="" />
<p className='text-white text-center pb-3 font-semibold'>{card.title}</p>
<p className='text-white text-center font-semibold pb-5'>{card.pricetag}</p>
<div className='flex justify-center mx-auto'>
<button  className='bg-transparent outline outline-orange-700 hover:bg-orange-600  outline-1   text-xs text-white p-3 px-4 rounded-full'>ADD TO CART</button>
</div>
        </div>
    )
  }




  return (
    <div className="card-bg" >
      <div className='container '>
      <div><h3 className='mx-3 pb-3 text-green-400 green_heading tracking-wider  font-bold'> OUR PRODUCTS</h3></div>
     <div className='flex flex-row  center-heading  pb-12 '>
      <h1 className='text-5xl w-4/5 pb-4 font-semibold  heading  text-white'>Welcome to our online vaping store</h1>
      <p className='text-stone-400   leading-7  text-sm center-para '>We offer a wide range of quality products, an easy shopping process, express delivery and first-class service.</p>
     </div>
      </div>

 {/* //Card section// */}
 <div className="flex product-cards flex-wrap justify-between ">
       {ProductCards.map(Cardrender)}
        </div> 

    </div>
  )
}

export default Card