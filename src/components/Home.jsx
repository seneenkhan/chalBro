import NavBar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

export default function Home()
{
    return (
    <>
    <div className="flex grow flex-col min-h-screen">
    <NavBar/>,
    
    <div className="flex flex-col items-center">
        <div className="flex">
            <input  
                type="text"
                name="location"
                id="Location"
                class="flex-1 w-80 mr-2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                placeholder="Enter your current location"
            />
            <input  
                type="text"
                name="destination"
                id="destination"
                class="flex-1 w-80 mr-2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                placeholder="Enter your destination"
            />
            <input  
                type="number"
                name="partners"
                id="partners"
                class="flex-1 w-80 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                placeholder="Enter the number of co-riders"
            />
        </div>
        <button
            type="submit"
            className="mt-5 flex justify-center items-center w-80 rounded-md bg-yellow-500 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
    <img className= "w-5"src="src/assets/icons8-search-50.png"/>
        Search
        </button>
    </div>
<Footer/>
</div>
    </>
    )
}