import Image from "next/image";
import Wave from "../img/wave.png";

import n1 from "../img/n1.png";
import n2 from "../img/n2.png";
import n3 from "../img/n3.png";
import n4 from "../img/n4.png";
import n5 from "../img/n5.png";

const Slider = () => {
  return (
    <>
      <p
        style={{
          textAlign: "center",
          fontSize: "5vw",
          fontWeight: "700",
          marginTop: 70,
          lineHeight: 1,
        }}
      >
        Craft Your Awesome <br />
        Business
      </p>
      <div style={{ marginTop: 50 }}>
        <div>
          <div
            style={{
              border: "1px solid #262626",
              padding: 10,
              borderRadius: 10,
              width: "70%",
              margin: "auto",
              backgroundColor: "rgb(30 30 30 / 90%)",
            }}
          >
            <blockquote class="    text-gray-500   dark:text-gray-400">
              <figcaption class="flex items-center justify-center ">
                <div
                  style={{
                    fontSize: 15,
                    color: "#98989A",
                    marginRight: 5,
                    marginRight: 5,
                  }}
                >
                  For
                </div>
                <div
                  style={{
                    backgroundColor: "#262626",
                    padding: 10,
                    borderRadius: 5,
                  }}
                >
                  <p style={{ color: "#fff" }}>Startups</p>
                </div>
                <div
                  style={{
                    fontSize: 15,
                    color: "#98989A",
                    marginRight: 5,
                    marginRight: 5,
                    marginLeft: 6,
                  }}
                >
                  ,
                </div>
                <div
                  style={{
                    backgroundColor: "#262626",
                    padding: 10,
                    borderRadius: 5,
                  }}
                >
                  <p style={{ color: "#fff" }}>Enterprise leaders</p>
                </div>
                <div
                  style={{
                    fontSize: 15,
                    color: "#98989A",
                    marginRight: 5,
                    marginRight: 5,
                    marginLeft: 6,
                  }}
                >
                  ,
                </div>
                <div
                  style={{
                    backgroundColor: "#262626",
                    padding: 10,
                    borderRadius: 5,
                  }}
                >
                  <p style={{ color: "#fff" }}>Media Publishers</p>
                </div>
                <div
                  style={{
                    fontSize: 15,
                    color: "#98989A",
                    marginRight: 5,
                    marginRight: 5,
                    marginLeft: 6,
                  }}
                >
                  ,
                </div>
              </figcaption>
            </blockquote>
          </div>
        </div>

        <Image style={{ position : 'absolute' , top : 75 }} src={Wave} alt="user photo" width={"100%"} height={'auto'} />

        <div style={{ marginTop: 50 }}>
          <blockquote>
            <figcaption class="flex items-center justify-center ">
              <div
                style={{
                  width: 160,
                  padding: 15,
                  borderRadius: 10,
                  border: "2px solid white",
                  marginRight: 20,
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "16",
                    color: "#fff",
                    fontWeight: "700",
                  }}
                >
                  Start Project
                </p>
              </div>
              <div
                style={{
                  width: 160,
                  padding: 15,
                  borderRadius: 10,
                  backgroundColor: "#FFE601",
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "16",
                    color: "#000",
                    fontWeight: "700",
                  }}
                >
                  Contact Us
                </p>
              </div>
            </figcaption>
          </blockquote>
        </div>
        <p
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: 14,
            marginTop: 200, 
          }}
        >
          Trusted By 250 + Companies
        </p>

        <div class="grid    rounded-lg shadow-sm    md:grid-cols-5 " style={{ marginBottom : 100 }}>
          <figure class="flex flex-col items-center justify-left  text-center   rounded-t-lg md:rounded-t-none md:rounded-ss-lg  ">
            <blockquote class="  mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <Image src={n1} alt="user photo" width={214} height={91} />
            </blockquote>
          </figure>
          <figure class="flex flex-col items-center justify-center   text-center   rounded-t-lg md:rounded-t-none md:rounded-ss-lg  ">
            <blockquote class="  mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <Image src={n2} alt="user photo" width={71} height={71} />
            </blockquote>
          </figure>
          <figure class="flex flex-col items-center justify-center  text-center   rounded-t-lg md:rounded-t-none md:rounded-ss-lg  ">
            <blockquote class="  mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <Image src={n3} alt="user photo" width={120} height={62} />
            </blockquote>
          </figure>
          <figure class="flex flex-col items-center justify-center  text-center   rounded-t-lg md:rounded-t-none md:rounded-ss-lg  ">
            <blockquote class="  mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <Image src={n4} alt="user photo" width={117} height={60} />
            </blockquote>
          </figure>
          <figure class="flex flex-col items-center justify-right  text-center   rounded-t-lg md:rounded-t-none md:rounded-ss-lg  ">
            <blockquote class="  mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <Image src={n5} alt="user photo" width={325} height={100} />
            </blockquote>
          </figure>
        </div>
      </div>
    </>
  );
};

export default Slider;
