import {FaGoogle, FaGithub, FaFacebookF} from 'react-icons/fa'

const Login = () => {
    return (
        <div className='max-w-7xl mx-auto flex flex-col items-center mt-10'>
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-800 text-white">
                <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                <div className="my-6 space-y-4">
                    <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri border-gray-400 focus:ri">
                        <FaGoogle className='w-5 h-5'/>
                        <p>Login with Google</p>
                    </button>
                    <button aria-label="Login with GitHub" role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri border-gray-400 focus:ri">
                        <FaGithub className='w-5 h-5'/>
                        <p>Login with GitHub</p>
                    </button>
                    <button aria-label="Login with Twitter" role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri border-gray-400 focus:ri">
                        <FaFacebookF className='w-5 h-5'/>
                        <p>Login with Facebook</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login