import { Link } from "react-router-dom"
import logo from "../assets/logo.png"


const Footer = () => {
  return (<footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
    <div className="mx-auto max-w-screen-xl text-center">
      <a
        href="#"
        className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
      ><img
                        className="block w-auto h-16 dark:hidden"
                        src={logo}
                        alt=""
                      />
      </a>
      <p className="my-6 text-gray-500 dark:text-gray-400">
        Open-source library of over 400+ web components and interactive elements
        built for better web.
      </p>
      <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
        <li>
          <Link to ="/" className="mr-4 hover:underline md:mr-6 ">
            Home
          </Link>
        </li>
        <li>
        <Link to ="/productlayout" className="mr-4 hover:underline md:mr-6">
            Products
          </Link>
        </li>
        
      </ul>
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2021-2022{" "}
        <a href="#" className="hover:underline">
          Flowbite™
        </a>
        . All Rights Reserved.
      </span>
    </div>
  </footer>
  
  );
};

export default Footer