
import NavBar from "./Navbar";
import Footer from "./Footer";
import { useRef, useState } from "react";
import useStore from "./store";

export default function Account() {
  const inputRef = useRef(null);
  const [image, setImageFile] = useState(null);
  const setImage = useStore((state) => state.setImage); 

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file); 
    setImage(file);
  };

 const[checked,setChecked] = useState(null);
 const handleChecked = (e) => {
    setChecked(target.checked);
    
 }

  return (
    <>
      <div className="flex grow flex-col min-h-screen">
        <NavBar />
        <div className="flex flex-col justify-center items-center">
          <div className="mt-10 w-20 h-20 rounded-full overflow-hidden relative">
            <input
              type="file"
              ref={inputRef}
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            {image ? (
              <img
                className="cursor-pointer object-cover w-full h-full"
                src={URL.createObjectURL(image)}
                alt="pfp"
              />
            ) : (
              <img
                className="cursor-pointer object-cover w-full h-full"
                src="src/assets/PngItem_3757223.png"
                alt="pfp"
              />
            )}
            {!image &&(

            
            
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={handleImageClick}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            )};
          </div>
            
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
                type="value"
                name="Mobile number"
                id="number"
                className="flex items-start w-80 mr-2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                placeholder="Mobile Number"
            /> 
            
           

            <select id="gender" className="flex items-start w-80 mr-2 px-3 py-2 mt-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none">
            <option selected className="slate-400">Gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="Others">Others</option>
            </select>

            <input  
                type="text"
                name="username"
                id="username"
                className="flex items-start w-80 mr-2 px-3 py-2 mt-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                placeholder="Username"
            />
            <div className="flex mt-4 items-center">
           <input className = " border-slate-300 focus:ring-yellow-500 focus:border-yellow-500 text-yellow-500" value = "test" type = "checkbox" onChange = {handleChecked} 
           />
           <label className="px-2 hover:text-yellow-500">I verify all the information provided is true</label>
           </div>
           <button
                  type="submit"
                  className="flex w-80 mt-4 justify-center rounded-md bg-yellow-500 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                 Submit
                </button>   
       <div className="flex items-center justify-center mt-4 ">
    <hr className="flex-grow border-t border-gray-300 mr-4" />
    <p className="text-sm text-gray-500">Or</p>
    <hr className="flex-grow border-t border-gray-300 ml-4" />
  </div>
  <button
    type="button"
    className="flex w-80 mt-4 justify-center rounded-md bg-yellow-500 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    onClick={() => {
     
      window.location.href = "/Login";
    }}
  >
    Logout
  </button>
        </div>
        <Footer />
      </div>
    </>
  );
}
