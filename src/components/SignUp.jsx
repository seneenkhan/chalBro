// import NavBar from "./Navbar"
// import Footer from "./Footer" 
// import { useState } from "react";
// import axios from 'axios'


// export default function SignUp() {
//   const [loading, setLoading] = useState(false);
   
  
//   const signUpWithGoogle = () => {
//     // Redirect to sign up with Google
//     setLoading(true);
//     window.location.href = "http://localhost:8080/auth/google";
//     axios.post('  http://127.0.0.1:5173/register',{email,password})
//   };
//     return (

//       <>
//       <div className="flex grow flex-col min-h-screen">
//       <NavBar/>
//         {/* {
  
//           ```
//           <html class="h-full bg-white">
//           <body class="h-full">
//           ```
//         } */}
//         {/* <div className="flex justify-center items-center h-screen"> */}
//         <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//           <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//             <img
//               className="mx-auto h-14 w-auto"
//               src="src/assets/PngItem_4354686.png"
//               alt="ChalBro"
//             />
//             <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//             Create a new account
//             </h2>
        
//           </div>
  
//           <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//             <form className="space-y-6" action="#" method="POST">
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                  Enter Email address
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     required
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
  
//               <div>
//                 <div className="flex items-center justify-between">
//                   <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//                     Enter Password
//                   </label>
//                   {/* <div className="text-sm">
//                     <a href="#" className="font-semibold yellow-400 text-gray-500 hover:text-yellow-500">
//                       Forgot password?
//                     </a>
//                   </div> */}
//                 </div>
//                 <div className="mt-2">
//                   <input
//                     id="password"
//                     name="password"
//                     type="password"
//                     autoComplete="current-password"
//                     required
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
  
//               <div>
//                 <button
//                   type="submit"
//                   className="flex w-full justify-center rounded-md bg-yellow-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                 >
//                   Sign Up
//                 </button>
//               </div>
//             </form>
//             <div className="flex items-center justify-center h-3 mt-10">
//             <hr className="flex-grow border-t border-gray-300 mr-4" />
//             <p className="text-sm text-gray-500">Or continue with</p>
//             <hr className="flex-grow border-t border-gray-300 ml-4" />
//             </div>
//             <div className="flex items-center justify-center">
//             <button className="px-3 py-1.5 w-full border flex items-center justify-center gap-2 border-slate-200 hover:text-slate-900 hover:shadow transition duration-150 mt-4"
//             onClick={signUpWithGoogle}
//                 disabled={loading}>
            
//             <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
//              <span className="text-center">Google</span>
//            </button>
//             </div>

    
//             {/* <p className="mt-10 text-center text-sm text-gray-500">
//               Not a member?{' '}
//               <a href="#" className="font-semibold leading-6 text-yellow-500 hover:text-yellow-400">
//                Create a new account
//               </a>
//             </p> */}
//           </div>
//         </div>
//         {/* </div> */}
//         <Footer/>
//         </div>
//       </>
//     )
//   }
  
import NavBar from "./Navbar";
import Footer from "./Footer"; 
import { useState } from "react";
import axios from 'axios';

export default function SignUp() {
  const [loading, setLoading] = useState(false);

  const signUpWithGoogle = async () => {
    try {
      setLoading(true);
      // Redirect to sign up with Google
      window.location.href = "http://localhost:8080/auth/google";
    } catch (error) {
      console.error('Error redirecting to Google:', error);
      // Handle error appropriately
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const email = e.target.email.value;
      const password = e.target.password.value;
      const response = await axios.post('http://localhost:8080/register', { email, password });
      console.log(response.data); // Log the response from the server
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle error appropriately
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex grow flex-col min-h-screen">
        <NavBar />
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-14 w-auto"
              src="src/assets/PngItem_4354686.png"
              alt="ChalBro"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Create a new account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit} action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                 Enter Email address
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
                    Enter Password
                  </label>
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
                  disabled={loading}
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="flex items-center justify-center h-3 mt-10">
              <hr className="flex-grow border-t border-gray-300 mr-4" />
              <p className="text-sm text-gray-500">Or continue with</p>
              <hr className="flex-grow border-t border-gray-300 ml-4" />
            </div>
            <div className="flex items-center justify-center">
              <button className="px-3 py-1.5 w-full border flex items-center justify-center gap-2 border-slate-200 hover:text-slate-900 hover:shadow transition duration-150 mt-4"
                onClick={signUpWithGoogle}
                disabled={loading}
              >
                <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                <span className="text-center">Google</span>
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
     
    </>
  );
}
