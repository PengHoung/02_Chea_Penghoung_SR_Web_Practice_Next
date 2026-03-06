import React from 'react'
export default function About() {
  const c = {
    backgroundColor: "red",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  }

  const pic ={
    width: "700px",
    height: "700px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
    overflow: "hidden",
  }

  const picM ={
    width: "600px",
    height: "600px",
    backgroundImage: "url(/vs.png)",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    textAlign: "center",
    position: "relative",
    top: "-80px",
  }
  return (
    <>
      <div>
        <div style={c}>
          <div style={pic}>
          <div style={picM}></div>
        </div>
        <div className='relative top-[-230px]'>
          <h1 className='text-8xl font-bold ml-16'>RUNNING.......</h1>
          <div className='bg-gray-700 text-[30px] w-[600px] p-4 mt-8 h-22 rounded-xl flex items-center justify-center text-white'>
              <p>JERRY!...RUNNING FOR YOUR LIFE TO GET CHEESE WITH YOU</p>
          </div>
        </div>
        </div>
      </div>
        
    </>
    
  )
}
