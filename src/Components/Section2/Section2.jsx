import React from 'react'
import "./Section2.css"
import fireImg from "../../assets/fire.png"
import shopProdcutImg from "../../assets/shop-product-2.png"
const Section2 = () => {
  return (
    <div className='section2-bg '>
        {/* //heading flex container */}
        <div className="flex justify-center leading-loose pb-20   items-center flex-col flex-wrap">
            <div><img className='w-8 pb-5' src={fireImg} /></div>
            <div><h3 className='mx-3 pb-3 text-green-400 tracking-wider  font-bold'> ABOUT PRODUCTS</h3></div>
            <div className='section2_heading'><h1 className='text-5xl  pb-4 font-semibold text-white text-center heading   w-12/12'>Try the new amazing taste <br /> of nicotine-free e-liquid</h1></div>
        </div>

        {/* //grid & flex column// */}
        <div className="flex section2-items justify-between flex-wrap flex-row container mx-auto">
            {/* //left list items */}
            <div className=' flex flex-col justify-evenly'>
                
                <li class="flex items-center ">
              <svg class="h-6 w-6 flex-none fill-orange-500 stroke-black stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-4 text-lg font-bold pt-10 text-white tracking-wider">
              Feel of menthol <br />
                <p class="text-xs font-bold pt-3 w-48 text-stone-400">We offer a wide range of quality vaping products</p> 
              </p>
            </li>
            <li class="flex items-center">
              <svg class="h-6 w-6 flex-none fill-orange-500 stroke-black stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-4 text-lg font-bold pt-10 text-white">
              No nicotine added <br />
              <p class="text-xs font-bold w-48 pt-3 text-stone-400">We offer a wide range of quality vaping products</p> 
              </p>
            </li>
            <li class="flex items-center">
              <svg class="h-6 w-6 flex-none fill-orange-500 stroke-black stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-4 text-lg font-bold pt-10 text-white">
              No smoker smell <br />
              <p class="text-xs font-bold w-48 pt-3  text-stone-400">We offer a wide range of quality vaping products</p> 
              </p>
            </li>
            
            </div>
            {/* //center img// */}
            <div className='section2-shop-bg scale-125 '><img className='w-96  vape' src={shopProdcutImg} alt="" /></div>
            {/* //right list itesm// */}
            <div className='flex'>
            <div className=' flex flex-col justify-evenly'>
                
                <li class="flex items-center ">
              <svg class="h-6 w-6 flex-none fill-orange-500 stroke-black stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-4 text-lg font-bold pt-10 text-white tracking-wider">
              Feel of menthol <br />
                <p class="text-xs font-bold w-48 pt-3 text-stone-400">We offer a wide range of quality vaping products</p> 
              </p>
            </li>
            <li class="flex items-center">
              <svg class="h-6 w-6 flex-none fill-orange-500 stroke-black stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-4 text-lg font-bold pt-10 text-white">
              No nicotine added <br />
              <p class="text-xs font-bold w-48 pt-3 text-stone-400">We offer a wide range of quality vaping products</p> 
              </p>
            </li>
            <li class="flex items-center">
              <svg class="h-6 w-6 flex-none fill-orange-500 stroke-black stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-4 text-lg font-bold pt-10 text-white ">
              No smoker smell <br />
              <p class="text-xs font-bold w-48 pt-3 text-stone-400">We offer a wide range of quality vaping products</p> 
              </p>
            </li>
            
            </div>
            </div>
        </div>

    </div>
  )
}

export default Section2