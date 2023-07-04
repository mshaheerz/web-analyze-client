import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LoadingPage from "../pages/LoadingPage"


function MainContent() {
    const [loading, setLoding ] = useState(false)
    const [url, setUrl] = useState('')
    const navigate = useNavigate()
    async function submitHandler(){
       setLoding(true)
        await axios.post('/insight',{url})
        setLoding(false)
        navigate('/tracker')
    }

    if(loading){
      return <LoadingPage size={35} />
    }


  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-64 lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
          <img className="w-8 h-8 mr-2" src="https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png" alt="logo" />
          Web Analyzer
        </a>
        <div className="flex flex-col gap-3 w-full bg-white rounded-lg   md:mt-0 sm:max-w-md xl:p-0 ">
            <div>
                
            </div>
            <div>
               <input type="text" onChange={(e)=>setUrl(e.target.value)} value={url} placeholder="www.google.com" className=" border-2 border-gray-200 rounded w-full p-2" />  
            </div>

            <div>
                <button disabled={url ===''} onClick={submitHandler} className="border w-full p-2 cursor-pointer disabled:cursor-default bg-gradient-to-r from-blue-600 to-pink-600 text-white rounded hover:bg-gradient-to-l">Analyze</button>
            </div>
           
        </div>

      </div>
  )
}

export default MainContent