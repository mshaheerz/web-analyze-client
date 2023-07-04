/* eslint-disable react/prop-types */


function LoadingPage({size}) {
  return (
    <div className=" ">
        

    <div className="w-[100%] mt-12 flex flex-row justify-center align-middle items-center h-10">
    <div
      style={{ width: `${size}px`, height: `${size}px` }}
      className="animate-spin">
      <div className="h-full w-full border-4 border-t-purple-500
       border-b-purple-700 rounded-[50%]">
      </div>
      
    </div>
    <div>
    
    </div>

  </div> 
  <h1 className="styleh1 text-lg font-semibold">Please wait...<span className="spanstyle"> </span></h1>
  </div> )
}

export default LoadingPage