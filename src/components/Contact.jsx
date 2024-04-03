import NavBar from "./Navbar"
import Footer from "./Footer"
export default function Contact(){
return(
<>
<div className="flex grow flex-col min-h-screen">
<NavBar/>
<h1 className="mt-10 text-center text-2xl font-semi-bold leading-9 tracking-tight text-black hover:text-yellow-500" >Hey, need to get in touch? Fill out the form with your inquery</h1>
  <div className="flex flex-col items-center ">
<div className= "py-6 flex">
<input  
                type="text"
                name="name"
                id="name"
                className="flex items-start w-40 mr-2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                placeholder="First name"
            />
            <input  
                type="text"
                name="name"
                id="name"
                className="flex items-start w-40 mr-2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                placeholder="Last name"
            />
          
            </div>
           
            <input  
                type="text"
                name="Email"
                id="Email"
                className="flex items-start w-80 mr-2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                placeholder="Email"
            />
               <textarea  rows="5" cols="33"
               placeholder=" Leave a messsage"
            className="flex items-start w-80 mr-2 px-3 py-2 mt-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                >
             </textarea>
             <button
                  type="submit"
                  className="flex w-80 mt-4 justify-center rounded-md bg-yellow-500 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                 Send
                </button>
           
            
             
            </div>
  <Footer/>
    </div>
</>
)

}
