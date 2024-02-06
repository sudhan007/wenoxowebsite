"use client";
import Image from "next/image";
import Logo from "../img/logo.png"; 
import { useState } from "react";

const Header = () => {
  let [ sel , setSet ] = useState(0)

  const handleClick = () => {

    const targetElement = document.getElementById('scrollToDiv');

    if (targetElement) { 
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      style={{
        backgroundColor: "#1A1A1A",
        padding :  10,
        marginLeft : '8%',
        marginRight : '8%'
      }}
      class=" border-gray-200 dark:bg-gray-900"
    >
      <div class=" flex flex-wrap items-center justify-between mx-auto p-4">
        <div class="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src={Logo} alt="user photo" width={151} height={31} />
        </div>
        <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div
            onClick={()=>{handleClick()}}
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul
              class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg 
           md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0    dark:border-gray-700"
            >
              <li>
                <div
                
                  style={{ color: "#fff" , borderColor : '#fff' , padding: 10 ,  borderRadius : 5 , borderWidth : 1 , width : 157 , textAlign : 'center' ,
                cursor : 'pointer' }}
                  aria-current="page"
                >
                  Contact us
                </div>
              </li>
            </ul>
          </div>
         
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
        
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id='navbar-default'
        >
          <ul
            
            class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg 
           md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0    dark:border-gray-700"
          >
            <li>
              <div onClick={()=>{
                setSet(0)
              }}
                style={ sel === 0 ?{ color: "#FFE601" , cursor : 'pointer' } : {cursor : 'pointer' } }
                class="block py-2 px-3   rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Home
              </div>
            </li>
            <li>
              <div onClick={()=>{
                setSet(1)
                handleClick()
              }} style={ sel === 1 ?{ color: "#FFE601" , cursor : 'pointer' } : {cursor : 'pointer' } }  class="block py-2 px-3   rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                About
              </div>
            </li>
            <li>
              <div  onClick={()=>{
                setSet(2)
              }}   style={ sel === 2 ?{ color: "#FFE601" , cursor : 'pointer' } : {cursor : 'pointer' } }  class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <a href="/portfolio.pdf" target="_blank" >Portfolio</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
