import React from 'react'

function Body() {
  return (
    <div className='h-[550px] bg-blue-950 bg-[url(projectbanner1.jpg)] bg-cover flex flex-col items-center gap-3 font-serif'>
        
        <main className='h-[250px] w-[450px]  flex items-end text-white font-bold font-serif text-[59px]'>
            <p><center> We Are Ready For Any Kinds Of Financial</center></p> 
        </main>
        <main className='h-[70px] w-[100%] flex flex-row gap-[8px] font-serif text-white font-bold'>
          <section className=' w-[30%] text-[50px]'>←</section>
          <section className=' w-[40%] text-[59px] flex items-end justify-center'>Help</section>
          <section className=' w-[30%] text-[50px] flex items-center justify-end'>→</section>
        </main>
        <main className='h-[130px] w-[400px] flex justify-center items-center text-white text-[20px]'>
            <p><center>We are high experienced financial service provider. we are providing financial services about ten years</center></p>
        </main>
        <main>
            <p>Get started</p>
        </main>
    </div>
  )
}

export default Body