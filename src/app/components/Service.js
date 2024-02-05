import Image from "next/image";
import Bg1 from "../img/bg1.png";
import i3 from "../img/i3.png";
import i2 from "../img/i2.png";
import i1 from "../img/i1.png";

const Service = () => {
  return (
    <>
      <div
        style={{
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "#262626",
        }}
        class="container"
      >
        <Image
          style={{ opacity: 0.3 }}
          src={Bg1}
          alt="user photo"
          width={"100%"}
          height={"auto"}
        />
        <div style={{ fontSize: "5vm" , fontSize : '700' }} class="centered">
          Our Services
        </div>
        <div class="centered2">
          Transform your brand with our innovative digital solutions that
          captivate and engage your audience.
        </div>
      </div>

      <div class="grid mb-8   rounded-lg shadow-sm   md:mb-12 md:grid-cols-3 ">
        <figure
          style={{
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#262626",
          }}
          class="flex flex-col items-center justify-center p-8 text-center   rounded-t-lg md:rounded-t-none md:rounded-ss-lg  "
        >
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <Image src={i2} alt="user photo" width={88} height={88} />

            <h3 style={{ fontSize : 20 , fontWeight : '700' , color : '#fff' , textAlign : 'left' , marginTop : 30 }} class="text-lg font-semibold ">
            Website Development
            </h3>
            <p style={{ textAlign : 'left' }} class="my-4">
            Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.            </p>
            
          </blockquote>
        </figure>
        <figure
          style={{
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#262626",
          }}
          class=" flex-col items-center justify-center p-8 text-center   rounded-t-lg md:rounded-t-none md:rounded-ss-lg  "
        >
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <Image src={i1} alt="user photo" width={88} height={88} />

            <h3 style={{ fontSize : 20 , fontWeight : '700' , color : '#fff' , textAlign : 'left' , marginTop : 30 }} class="text-lg font-semibold ">
            ERP Software
            </h3>
            <p style={{ textAlign : 'left' }} class="my-4">
            At Wenoxo Technology, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.            </p>
          </blockquote>
        </figure> 
        <figure
          style={{
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#262626",
          }}
          class=" flex-col items-center justify-center p-8 text-center   rounded-t-lg md:rounded-t-none md:rounded-ss-lg  "
        >
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <Image src={i3} alt="user photo" width={88} height={88} />

            <h3 style={{ fontSize : 20 , fontWeight : '700' , color : '#fff' , textAlign : 'left' , marginTop : 30 }} class="text-lg font-semibold ">
            Mobile App Development
            </h3>
            <p style={{ textAlign : 'left' }} class="my-4">
            Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.
            </p>
          </blockquote>
        </figure> 
      </div>
    </>
  );
};

export default Service;
