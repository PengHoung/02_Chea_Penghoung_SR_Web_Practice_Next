import React from 'react'
import style from "./about.module.css";

export default function AboutUs() {

  return (
    <>
      <div className='w-screen h-full flex-col items-center justify-center bg-amber-100 flex overflow-hidden'>
        <div className='text-black text-[80px]' >Aout Our GamePlay</div>
        <div className='bg-gray-700 w-[700px] h-[250px] p-8 text-[30px] rounded-xl flex items-center justify-center text-white' >
            <p>This is the about our gaming, Tom is the cat that raise by owner while Jerry is staying the same house with Tom, both of them always fighting</p>
        </div>
        <div className='flex items-center justify-center items-center flex mt-4'>
            <div className={style.box}>
                <div><p className='text-white text-[30px] text-center'>TOM</p></div>
                <div className={style.picture}></div>
            </div>  
            <p className='text-[60px] relative top-[-80px]'>VS</p>
            <div className={style.box}>
                <div><p className='text-white text-[30px]'>JERRY</p></div>
                <div className={style.pictureM}></div>
            </div>  
        </div>
        <button className='bg-red-500 hover:bg-blue-700 text-4xl text-white font-bold py-2 px-4 rounded relative top-[-100px]'>
          PLAY NOW
        </button>
      </div>
    </>
    
  )
}
