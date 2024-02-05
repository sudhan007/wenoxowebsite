import Image from "next/image";
import Bg1 from "../img/bg1.png"; 
import p1 from "../img/p1.png"; 
import p2 from "../img/p2.jpg"; 
import p3 from "../img/p3.png";

import a1 from "../img/a1.png"; 
import a2 from "../img/a2.png"; 
import a3 from "../img/a3.png"; 
import a4 from "../img/a4.png"; 

const Portfolio = () => {
  return (
    <>
      <p
        style={{
          color: "#fff",
          fontSize: 30,
          fontWeight: "700",
          textAlign: "center",
          marginBottom: 10, 
        }}
      >
        Our <span style={{ color : '#FFE600' }}>Awesome</span> Portofolio
      </p>
      <div class="grid     rounded-lg shadow-sm    md:grid-cols-2 ">
        <figure class="flex flex-col items-center justify-center p-8 text-center   rounded-t-lg md:rounded-t-none md:rounded-ss-lg  ">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <Image src={p3} alt="user photo" width={500} height={400} /> 
          </blockquote>
        </figure>
        <figure class="flex flex-col items-center justify-center p-8 text-center   rounded-t-lg md:rounded-t-none md:rounded-ss-lg  ">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <Image src={p2} alt="user photo" width={500} height={400} /> 
          </blockquote>
        </figure>
      </div>
      <div class="grid mb-2  rounded-lg shadow-sm   md:mb-12 md:grid-cols-1 ">
        <figure class="flex flex-col items-center justify-center p-8 text-center   rounded-t-lg md:rounded-t-none md:rounded-ss-lg  ">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <Image src={p1} alt="user photo" width={700} height={480} /> 
          </blockquote>
        </figure> 
      </div>

      <div class="grid mb-2 rounded-lg shadow-sm   md:grid-cols-4 sm:grid-cols-2">
        <figure class="flex flex-col items-center justify-center  text-center   rounded-t-lg md:rounded-t-none md:rounded-ss-lg  ">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <Image style={{ margin : 'auto' }} src={a1} alt="user photo" width={70} height={70} /> 
          <p style={{ color : '#fff' , fontSize :  13 , marginTop : 13 }} >Completed Projects</p>
          <h1 style={{ color : '#fff' , fontSize : 40 , fontWeight :'700' }}>60 +</h1>
          </blockquote>
        </figure>
        <figure class="flex flex-col items-center justify-center  text-center   rounded-t-lg md:rounded-t-none md:rounded-ss-lg  ">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <Image style={{ margin : 'auto' }} src={a2} alt="user photo" width={70} height={70} /> 
          <p style={{ color : '#fff' , fontSize :  13 , marginTop : 13 }} >Customer Satisfaction</p>
          <h1 style={{ color : '#fff' , fontSize : 40 , fontWeight :'700' }}>100 %</h1>
          </blockquote>
        </figure> 
        <figure class="flex flex-col items-center justify-center  text-center   rounded-t-lg md:rounded-t-none md:rounded-ss-lg  ">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <Image style={{ margin : 'auto' }} src={a3} alt="user photo" width={70} height={70} /> 
          <p style={{ color : '#fff' , fontSize :  13 , marginTop : 13 }} >Client Retention</p>
          <h1 style={{ color : '#fff' , fontSize : 40 , fontWeight :'700' }}>100 %</h1>
          </blockquote>
        </figure> 
        <figure class="flex flex-col items-center justify-center  text-center   rounded-t-lg md:rounded-t-none md:rounded-ss-lg  ">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <Image style={{ margin : 'auto' }} src={a4} alt="user photo" width={70} height={70} /> 
          <p style={{ color : '#fff' , fontSize :  13 , marginTop : 13 }} >Years in Business</p>
          <h1 style={{ color : '#fff' , fontSize : 40 , fontWeight :'700' }}>7 +yrs</h1>
          </blockquote>
        </figure> 
      </div>
    </>
  );
};

export default Portfolio;
