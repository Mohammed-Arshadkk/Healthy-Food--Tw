import React from 'react'
import search from "../assets/icons8-search-24.png"

function Header() {
  return (
    <>
    <div>
        <div className='w-screen h-screen bg-no-repeat'style={{backgroundImage:`url(https://images.unsplash.com/photo-1478144592103-25e218a04891?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZCUyMHdoaXRlfGVufDB8fDB8fHww)`}}>
            <nav>
                <ul className='flex p-6 gap-8 '>
                    <li className='font-bold text-xl'><span className='text-green-500'>Kitchen</span> Yuma</li>
                    <span className='flex-1'></span>
                    <li className='text-gray-800 font-semibold'>Home</li>
                    <li className='text-gray-800 font-semibold'>Menu</li>
                    <li className='text-gray-800 font-semibold'>Blog</li>
                    <li className='text-gray-800 font-semibold'>Pages</li>
                    <li className='text-gray-800 font-semibold'>About</li>
                    <li className='text-gray-800 font-semibold'>Shop</li>
                    <li className='text-gray-800 font-semibold'>Contact</li>
                    <span className='flex-1'></span>
                    <img className='w-6 h-6' src={search} alt="" />
                    <li className='text-gray-800 font-semibold'> Search</li>
                    <li className='text-gray-800 font-semibold'>Log In</li>
                </ul>
            </nav>

            <div className='flex-row p-6 ml-[56%]'>
                <h1 className='text-6xl font-bold'><span className='text-orange-500'>Enjoy</span> Healthy <br/>Life & Tasty Food.</h1><br /><br />
                <p className=' w-[90%] '>A healthy diet is essential for good health and nutrition.It protects you against many chronic noncommunicable diseases, such as heart disease, diabetes and cancer. Eating a variety of foods and consuming less salt, sugars and saturated and industrially-produced trans-fats, are essential for healthy diet.</p><br /><br />
                <button className='px-6 py-2 border-2 bg-green-500 text-white rounded-full font-bold'>Show more</button>
                <button className='px-6 py-2 border-2 border-green-400 font-bold rounded-full ml-7 hover:bg-green-400 hover:text-white'>Order Now</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header
