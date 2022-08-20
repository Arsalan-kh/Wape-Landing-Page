import React from "react";
import "./Section1.css";
import VapedeviceImg from "../../assets/vaping-devices.png";
const Section1 = () => {
  return (
    <div className="section1  ">
      <div class=" grid header-container  grid-cols-2 auto-cols-auto  sm:items-center md:items-center sm:grid-cols-1 md:gird-cols-1 lg:grid-cols-2 mb-24  gap-2">
        <div className="mx-auto ">
          <div className="vape-device-bg  ">
            <div>
              <img className=" w-11/12 vape " src={VapedeviceImg} alt="" />
            </div>
          </div>
        </div>

        <div>
          {/* //left_content */}
<div className=' w-11/12 left_content'>
  <div className='  mb-8'>
 <h3 className=' text-green-400 tracking-wider font-bold'>What we do</h3>
  </div>
  <h1 className=' text-5xl font-bold text-white tracking-wider'>We offer a wide range of  vaping products</h1>
<p className='text-gray-400 text-lg mt-6 tracking-widest font-light leading-8'>Welcome to our store! There are many electronic cigarettes, e-liquids, accessories and vaping accessories in our store. Our customers appreciate us for a wide range of products: in our network there are products both premium segment and middle and budget categories at the same time.</p>

<a href="#" className='CTA mt-12'>Shop Now</a>
</div>
        </div>
     
      </div>
      <div className="flex p-14  flex-row flex-wrap md:w-12/12 md:flex-wrap  justify-around  ">
        <div >
        <h1 className="text-center  fs-black">800k</h1>
        <p className="tracking-light leading-wider text-xl text-zinc-400 pt-4 pb-12">E-liquid sold last month</p>
        </div>
        <div>
        <h1 className="text-center  fs-black">50</h1>
        <p className="tracking-light leading-wider text-xl text-zinc-400 pt-4 pb-12">Shop around the world</p>
        </div>
        <div>
        <h1 className="text-center  fs-black">10</h1>
        <p className="tracking-light leading-wider text-xl text-zinc-400 pt-4 pb-12">Years of experience</p>
        </div>
          {/* <div className="p-5 flex justify-center flex-col  m-12"><h1 className="text-4xl  font-bold text-white">800k</h1><p className=" ">E-liquid sold last month</p></div>
          <div className="p-5 m-12"><h1 className="text-4xl font-bold text-white">50</h1>  <p className=" ">Shop around the world</p></div>
          <div className="p-5 m-12"><h1 className="text-4xl font-bold text-white">10</h1>  <p className=" ">Years of experience</p></div> */}
          
        </div>
    </div>
  );
};

export default Section1;
