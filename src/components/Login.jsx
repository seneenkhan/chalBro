import NavBar from "./Navbar"
import Footer from "./Footer"
import { Link } from "react-router-dom"
export default function Login() {

  function Login() {
    const googleAuth = () =>{
      window.open(
        `${process.env.REACT_APP_URL}/auth/google/callback`,
        "_self"
      );
    }
  };
    return (
    
      <>
          <div className="flex grow flex-col min-h-screen">
      <NavBar/>,
        <div className="flex flex-1 flex-col justify-center px-6 py-2 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-14 w-auto"
              src="src/assets/PngItem_4354686.png"
              alt="ChalBro"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
        
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold yellow-400 text-gray-500 hover:text-yellow-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-yellow-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
            <div className="flex items-center justify-center h-3 mt-10">
            <hr className="flex-grow border-t border-gray-300 mr-4" />
            <p className="text-sm text-gray-500">Or continue with</p>
            <hr className="flex-grow border-t border-gray-300 ml-4" />
            </div>
            <div className="flex items-center justify-center">
  <button className="px-3 py-1.5 w-full border flex items-center justify-center gap-2 border-slate-200 text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150 mt-4">
    <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
    <span className="text-center">Google</span>
  </button>
</div>

    
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
             <Link to="/SignUp" className="font-semibold leading-6 text-yellow-500 hover:text-yellow-400">Create a new account</Link>
            </p>
          </div>
        </div>
     
        <Footer/>
        </div> 
      </>
    )
  }
  