import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function RegisterPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr]= useState('')
    const navigate = useNavigate()

    const registerHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/register', {
                email,
                password

            });
            if(data.status==='success'){
             navigate('/login')
            }else{
             setErr(data.message)
            }



        } catch (error) {
            alert(error.message)
        }


    }


    return (
        <section className="bg-gray-50  h-screen">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
                    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                    Web Analyzer
                </a>
                <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                            Register your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={registerHandler}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-bl-600 focus:border-blue-600 block w-full p-2.5 " required="" />
                            </div>
                            <div className="flex items-center justify-between">
                            </div>
                            <p className="text-red-700">{err}</p>
                            <button disabled={email == '' || password == ''} type="submit" className="w-full text-white bg-gradient-to-r from-blue-600 to-pink-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign up</button>
                            <p className="text-sm font-light text-gray-500">
                                Already an account ? <Link to={'/login'} className="font-medium text-primary-600 hover:underline ">Sign in</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RegisterPage