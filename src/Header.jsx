import React from 'react'

function Header() {
  return (
    <div className='h-[50px] bg-white flex flex-row gap-1 justify-around items-center'>
        <main className='w-[140px]'>
            <img src="project logo.png"/>
        </main>
        <main className=' w-[500px] h-[40px] flex justify-around items-center'> 
            <ol className='flex flex-row justify-center items-center gap-8'>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Contact</li>
                <li>Pages</li>
            </ol>
        </main>
        <main className='bg-blue-800 h-[40px] w-[170px] rounded-[5px] flex justify-center items-center font-bold text-white'>
            <p>GET A QUOTE →</p>
        </main>
    </div> 
  )
}

export default Header