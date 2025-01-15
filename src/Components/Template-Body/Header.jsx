import React from 'react'

function Header() {
  return (
    <>
    <div className='flex flex-row'>
      <div>
     <h1 className='text-7xl font-bold mr-32 mt-28 ml-12'>Your Feet Deserves the Best</h1>
     <p className='mr-32 ml-16'>Your Feet deserves the best and we're here to Help You with our Shoes.</p> 
     
     <div className='px-7 mr-7 ml-16 mt-11'>
      <button className="mr-11 relative h-[50px] w-40 overflow-hidden border border-green-300 bg-white text-green-600 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:shadow-green-400 hover:before:w-2/4 hover:before:bg-green-400 hover:after:w-2/4 hover:after:bg-green-400"><span className='relative z-10'>Shop Now</span></button>
      <button className='ml-11 relative h-[50px] w-40 items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]'><span className='relative z-10'>Categories </span></button>
      <div className='mt-12 '>
      <p className='flex-row flex'>Buy this now at - 
        <img src="https://banner2.cleanpng.com/20180615/rio/kisspng-couponcode-online-shopping-amazon-com-elon-musk-5b2374c9e63982.860906731529050313943.jpg" className='ml-6' height={25} width={65} alt="" />
        <img src="https://www.liblogo.com/img-logo/my8595w8f4-myntra-logo-what-is-the-myntra-logo-issue-quora.png" className='ml-4' height={50} width={45} alt="" />
        <img src="https://banner2.cleanpng.com/20180423/pkw/kisspng-amazon-com-logo-retail-sales-order-fulfillment-point-takeaway-5addea103a70e5.3589590015244928162394.jpg" className='ml-0' height={50} width={85} alt="" /> </p>
     </div>
     </div>
     </div>
     
     <div className=' float-end ml-20 mr-11 mt-10'>
      <img src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1700094/2018/5/19/ac536efa-06ef-4c1c-a31f-955f3e017e931526722048865-HRX-by-Hrithik-Roshan-Men-White-Sneakers-3231526722047882-1.jpg" alt="" height={50} width={500} />
     </div>
     
     </div>
     
    </>
  )
}

export default Header
