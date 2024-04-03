 import { Link } from "react-router-dom"
import useStore from "./store";
 
 
export default function NavBar(){
    const image = useStore((state) => state.image);
return(
<nav>


<nav className="bg-yellow-500  hover:bg-yellow-400 border-gray-200 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
  <div className="flex items-center space-x-3 rtl:space-x-reverse">
    <img src="src/assets/carpool-commuting-taipei-station-transport-train-strategic-vector-63e6af386e848963dde06db988891688.png" class="h-20 w-20" alt="ChalBro logo" />
    <span className="self-center text-5xl font-bold whitespace-nowrap text-black">CHALBRO!</span>
</div>





    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
  <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
    <li class="flex items-center h-16"> 
      <Link to="/" className="nav-link">Home</Link>
    </li>
    <li class="flex items-center h-16">
      <Link to="/Login" className="nav-link">Login</Link>
    </li>
    <li class="flex items-center h-16">
      <Link to="/SignUp" className="nav-link">SignUp</Link>
    </li>
    <li class="flex items-center h-16">
      <Link to="/Contact" className="nav-link">Contact</Link>
    </li>
    <li class="flex items-center h-16">
      <Link to="/Account" className="nav-link">
        <img
          src={image ? URL.createObjectURL(image) : "src/assets/PngItem_3757223.png"}
          alt="Account"
          className="h-12 w-12 object-cover cursor-pointer  rounded-full overflow-hidden relative" //
        />
      </Link>
    </li>
  </ul>
</div>

  </div>
</nav>

</nav>
)
}

