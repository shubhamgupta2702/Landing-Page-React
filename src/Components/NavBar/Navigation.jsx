import React from 'react'

function Navigation() {
  return (
    <>
      <div>
        <nav className="flex flex-row">
          <div className="p-5 mr-72">
            <img src="https://i.postimg.cc/yNGhwGRw/removed-background-3.png" height={100} width={100} alt="" />
          </div>
          <div className="flex flex-row items-center justify-center ">
            <div className="p-10">
            <a href="">Home</a></div>
            <div className="p-10">
            <a href="">About Us</a></div>
            <div className="p-10">
            <a href="">Contact Us</a></div>
            <div className="p-10">
            <a href="">Location</a>
            </div>

            
          </div>
          <div className="float-right flex justify-end
          ml-72 mt-14">
              <button className="before:ease relative h-12 w-40 overflow-hidden border border-blue-900 bg-black text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-black hover:before:-translate-x-40">
                <span className="relative z-10">
                Login
                </span>
              </button>
            </div>
        </nav>
      </div>
      
    </>
  )
}

export default Navigation
