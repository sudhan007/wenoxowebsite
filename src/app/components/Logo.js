"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import b1 from "../img/b1.png";
import b2 from "../img/b2.png";
import b3 from "../img/b3.png";

import z1 from "../img/z1.png";
import z2 from "../img/z2.png";
import z3 from "../img/z3.png";
import z4 from "../img/z4.png";
import z5 from "../img/z5.png";
import z6 from "../img/z6.png";

import m1 from "../img/m1.png";
import m2 from "../img/m2.png";
import star from "../img/star.png";
import logo from "../img/logo.png";

const Logo = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 2200, min: 1851 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 1850, min: 1585 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1584, min: 1251 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 1250, min: 940 },
      items: 2,
    },
    mobile_one: {
      breakpoint: { max: 940, min: 0 },
      items: 1,
    },
  };

  const det = [
    {
      service: "Working with Wenoxo Technologies was a breeze.",
      des: "They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend.",
      one: "Mark Thompson",
      two: "Founder of HungryBites.",
      three: m1,
    },
    {
      service:
        "Wenoxo Technologies developed a comprehensive booking and reservation system for our event management company",
      des: "Their attention to detail and commitment to delivering a user friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.",
      one: "Sarah Johnson",
      two: "Founder of HungryBites.",
      three: m2,
    },
  ];

  return (
    <>
      <div
        style={{
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "#262626",
        }}
        class="container   mt-12"
      >
        <Image
          style={{ opacity: 0.3 }}
          src={b1}
          alt="user photo"
          width={"100%"}
          height={"auto"}
        />
        <div style={{ fontSize: "5vm", fontSize: "700" }} class="centered3">
          <Image src={b2} alt="user photo" width={"100%"} height={"auto"} />
        </div>
        <div class="centered2">
          Experience excellence in digital craftsmanship with our team of
          skilled professionals dedicated to delivering exceptional results.
        </div>
      </div>

      <div class="grid   rounded-lg shadow-sm   md:grid-cols-2 ">
        <figure
          style={{
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#262626",
          }}
          class="flex flex-col items-center justify-center p-8 text-center   rounded-t-lg md:rounded-t-none md:rounded-ss-lg  "
        >
          <blockquote class="max-w-2xl mx-auto   text-gray-500   dark:text-gray-400">
            <figcaption class="flex items-center justify-left ">
              <Image src={z1} alt="user photo" width={88} height={88} />
              <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Requirement and Gathering</div>
              </div>
            </figcaption>
            <p style={{ textAlign: "left" }} class="my-4">
              Our team consists of highly skilled professionals who have a deep
              understanding of the digital landscape. We stay updated with the
              latest industry trends and best practices to deliver cutting-edge
              solutions.{" "}
            </p>
          </blockquote>
        </figure>
        <figure
          style={{
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#262626",
          }}
          class="flex flex-col items-center justify-center p-8 text-center   rounded-t-lg md:rounded-t-none md:rounded-ss-lg  "
        >
          <blockquote class="max-w-2xl mx-auto   text-gray-500   dark:text-gray-400">
            <figcaption class="flex items-center justify-left ">
              <Image src={z2} alt="user photo" width={88} height={88} />
              <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>UI UX Designer</div>
              </div>
            </figcaption>
            <p style={{ textAlign: "left" }} class="my-4">
              We prioritize our clients and their unique needs. We listen to
              your ideas, challenges, and goals, and tailor our services to meet
              your specific requirements. Your success is our success.
            </p>
          </blockquote>
        </figure>
        <figure
          style={{
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#262626",
          }}
          class="flex flex-col items-center justify-center p-8 text-center   rounded-t-lg md:rounded-t-none md:rounded-ss-lg  "
        >
          <blockquote class="max-w-2xl mx-auto   text-gray-500   dark:text-gray-400">
            <figcaption class="flex items-center justify-left ">
              <Image src={z3} alt="user photo" width={88} height={88} />
              <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Development</div>
              </div>
            </figcaption>
            <p style={{ textAlign: "left" }} class="my-4">
              Our primary focus is on delivering results. We combine creativity
              and technical expertise to create digital products that drive
              business growth, enhance user experiences, and provide a
              competitive advantage.
            </p>
          </blockquote>
        </figure>
        <figure
          style={{
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#262626",
          }}
          class="flex flex-col items-center justify-center p-8 text-center   rounded-t-lg md:rounded-t-none md:rounded-ss-lg  "
        >
          <blockquote class="max-w-2xl mx-auto   text-gray-500   dark:text-gray-400">
            <figcaption class="flex items-center justify-left ">
              <Image src={z4} alt="user photo" width={88} height={88} />
              <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Prototype</div>
              </div>
            </figcaption>
            <p style={{ textAlign: "left" }} class="my-4">
              We value long-term relationships with our clients. We see
              ourselves as your digital partner, providing ongoing support,
              maintenance, and updates to ensure your digital products continue
              to thrive.
            </p>
          </blockquote>
        </figure>
        <figure
          style={{
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#262626",
          }}
          class="flex flex-col items-center justify-center p-8 text-center   rounded-t-lg md:rounded-t-none md:rounded-ss-lg  "
        >
          <blockquote class="max-w-2xl mx-auto   text-gray-500   dark:text-gray-400">
            <figcaption class="flex items-center justify-left ">
              <Image src={z5} alt="user photo" width={88} height={88} />
              <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Quality Assurance</div>
              </div>
            </figcaption>
            <p style={{ textAlign: "left" }} class="my-4">
              Our primary focus is on delivering results. We combine creativity
              and technical expertise to create digital products that drive
              business growth, enhance user experiences, and provide a
              competitive advantage.
            </p>
          </blockquote>
        </figure>
        <figure
          style={{
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#262626",
          }}
          class="flex flex-col items-center justify-center p-8 text-center   rounded-t-lg md:rounded-t-none md:rounded-ss-lg  "
        >
          <blockquote class="max-w-2xl mx-auto   text-gray-500   dark:text-gray-400">
            <figcaption class="flex items-center justify-left ">
              <Image src={z6} alt="user photo" width={88} height={88} />
              <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Deployment</div>
              </div>
            </figcaption>
            <p style={{ textAlign: "left" }} class="my-4">
              We value long-term relationships with our clients. We see
              ourselves as your digital partner, providing ongoing support,
              maintenance, and updates to ensure your digital products continue
              to thrive.
            </p>
          </blockquote>
        </figure>
      </div>

      <div
        style={{
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "#262626",
          marginBottom: 30,
        }}
        class="container"
      >
        <Image
          style={{ opacity: 0.3 }}
          src={b3}
          alt="user photo"
          width={"100%"}
          height={"auto"}
        />
        <div
          style={{ fontSize: 30, fontWeight: "700", lineHeight: 1 }}
          class="centered"
        >
          What our Clients say About us
        </div>
        <div
          style={{ paddingLeft: 70, paddingRight: 70, lineHeight: 1.5 }}
          class="centered2"
        >
          At Wenoxo Technologies, we take pride in delivering exceptional
          digital products and services that drive success for our clients.
          Here's what some of our satisfied clients have to say about their
          experience working with us
        </div>
      </div>

      <div style={{ marginBottom: 30 }}>
        <Carousel
          infinite={true}
          arrows={false}
          autoPlay={true}
          autoPlaySpeed={3000}
          responsive={responsive}
        >
          {det.map((data, key) => {
            return (
              <div
                style={{
                  width: "100%",
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderColor: "#262626",
                  padding: 40,
                }}
              >
                <p
                  style={{ color: "#FCEE6C", fontSize: 21, fontWeight: "500" }}
                >
                  {data.service}
                </p>
                <p style={{ color: "#fff", fontSize: 15, marginTop: 20 }}>
                  {data.des}
                </p>

                <div
                  class="flex items-center justify-between "
                  style={{ marginTop: 40 }}
                >
                  <figcaption class="flex items-center justify-left ">
                    <Image
                      src={data.three}
                      alt="user photo"
                      width={60}
                      height={60}
                    />
                    <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                      <p style={{ fontWeight: "600" }}>{data.one}</p>
                      <p style={{ fontWeight: "200" }}>{data.one}</p>
                    </div>
                  </figcaption>
                  <div
                    style={{
                      width: 160,
                      height: 45,
                      backgroundColor: "#262626",
                      padding: 12,
                    }}
                  >
                    <Image
                      src={star}
                      alt="user photo"
                      width={126}
                      height={60}
                      style={{ margin: "auto" }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>

      <div style={{ marginTop: 30, marginBottom: 30 }}>
        <div
          style={{
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#262626",
            marginBottom: 30,
          }}
          class="container"
        >
          <Image
            style={{ opacity: 0.3 }}
            src={b3}
            alt="user photo"
            width={"100%"}
            height={"auto"}
          />

          <div class="centered4">
            <Image src={logo} alt="user photo" width={250} height={"auto"} />
          </div>

          <div style={{}} class="centered">
            <p style={{ fontSize: 30, fontWeight: "700", lineHeight: 1 }}>
              Thank you for your Interest in Wenoxo Technologies
            </p>
          </div>
          <div
            style={{ paddingLeft: 70, paddingRight: 70, lineHeight: 1.2 }}
            class="centered2s"
          >
            At Wenoxo Technologies, we take pride in delivering exceptional
            digital products and services that drive success for our clients.
            Here's what some of our satisfied clients have to say about their
            experience working with us
          </div>
          <div
            style={{
              width: 210,
              height: 50,
              borderRadius: 3,
              backgroundColor: "#424242",
              padding: 14,
            }}
            class="centered2ss"
          >
            <p style={{ color: "#fff", textAlign: "center" }}>+91 6380058663</p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 60, marginBottom: 20 }}>
        <div
          style={{
            width: "70%",
            margin: "auto",
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#262626",
          }}
        >
          <div class="grid   rounded-lg shadow-sm   md:grid-cols-2 ">
            <figure class="flex flex-col items-center justify-center p-8 text-center   rounded-t-lg md:rounded-t-none md:rounded-ss-lg  ">
              <blockquote
                class="max-w-2xl mx-auto   text-gray-500   dark:text-gray-400"
                style={{
                  width: "100%",
                  padding: 20,
                  backgroundColor: "#242424",
                }}
              >
                <p style={{ fontSize: 14, color: "#fff", textAlign: "left" }}>
                  Full Name
                </p>
                <input
                  type="text"
                  id="textInput"
                  style={{ width: "100%" }}
                  className="inoput"
                  placeholder="Type here"
                />
              </blockquote>
            </figure>
            <figure class="flex flex-col items-center justify-center p-8 text-center   rounded-t-lg md:rounded-t-none md:rounded-ss-lg  ">
              <blockquote
                class="max-w-2xl mx-auto   text-gray-500   dark:text-gray-400"
                style={{
                  width: "100%",
                  padding: 20,
                  backgroundColor: "#242424",
                }}
              >
                <p style={{ fontSize: 14, color: "#fff", textAlign: "left" }}>
                  Email
                </p>
                <input
                  type="text"
                  id="textInput"
                  style={{ width: "100%" }}
                  className="inoput"
                  placeholder="Type here"
                />
              </blockquote>
            </figure>
          </div>

          <div class="grid   rounded-lg shadow-sm   md:grid-cols-1 ">
            <figure class="flex flex-col items-center justify-center p-8 text-center   rounded-t-lg md:rounded-t-none md:rounded-ss-lg  ">
              <blockquote
                class=" mx-auto   text-gray-500   dark:text-gray-400"
                style={{
                  width: "100%",
                  padding: 20,
                  backgroundColor: "#242424",
                }}
              >
                <p style={{ fontSize: 20, color: "#fff", textAlign: "left" }}>
                  Why are you contacting us?
                </p>

                <div class="grid   rounded-lg shadow-sm   md:grid-cols-2 ">
                  <figure
                    style={{
                      marginTop: 40, 
                    }}
                    class=""
                  >
                    <blockquote class="max-w-2xl mx-auto   text-gray-500   dark:text-gray-400">
                      <figcaption class="flex items-center justify-left ">
                        <input
                          type="checkbox"
                          id="textInput"
                          style={{
                            backgroundColor: "transparent",
                            border: "2px solid #333333",
                            color: "#FFE601",
                          }}
                          placeholder="Type here"
                        />
                        <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                          <div style={{ fontSize: 15, color: "#fff", }}>Web Design</div>
                        </div>
                      </figcaption>
                    </blockquote>
                  </figure>
                  <figure
                    style={{
                      marginTop: 20,
                    }}
                    class=""
                  >
                    <blockquote class="max-w-2xl mx-auto   text-gray-500   dark:text-gray-400">
                      <figcaption class="flex items-center justify-left ">
                        <input
                          type="checkbox"
                          id="textInput"
                          style={{
                            backgroundColor: "transparent",
                            border: "2px solid #333333",
                            color: "#FFE601",
                          }}
                          placeholder="Type here"
                        />
                        <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                        <div style={{ fontSize: 15, color: "#fff", }}>Collaboration</div>
                        </div>
                      </figcaption>
                    </blockquote>
                  </figure>

                  <figure
                    style={{
                      marginTop: 20,
                    }}
                    class=""
                  >
                    <blockquote class="max-w-2xl mx-auto   text-gray-500   dark:text-gray-400">
                      <figcaption class="flex items-center justify-left ">
                        <input
                          type="checkbox"
                          id="textInput"
                          style={{
                            backgroundColor: "transparent",
                            border: "2px solid #333333",
                            color: "#FFE601",
                          }}
                          placeholder="Type here"
                        />
                        <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                        <div style={{ fontSize: 15, color: "#fff", }}>Mobile App Design</div>
                        </div>
                      </figcaption>
                    </blockquote>
                  </figure>

                  <figure
                    style={{
                      marginTop: 20,
                    }}
                    class=""
                  >
                    <blockquote class="max-w-2xl mx-auto   text-gray-500   dark:text-gray-400">
                      <figcaption class="flex items-center justify-left ">
                        <input
                          type="checkbox"
                          id="textInput"
                          style={{
                            backgroundColor: "transparent",
                            border: "2px solid #333333",
                            color: "#FFE601",
                          }}
                          placeholder="Type here"
                        />
                        <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                        <div style={{ fontSize: 15, color: "#fff", }}>Others</div>
                        </div>
                      </figcaption>
                    </blockquote>
                  </figure>
                </div>
              </blockquote>
            </figure>
          </div>

          <div class="grid   rounded-lg shadow-sm   md:grid-cols-1 ">
            <figure class="flex flex-col items-center justify-center p-8 text-center   rounded-t-lg md:rounded-t-none md:rounded-ss-lg  ">
              <blockquote
                class="  mx-auto   text-gray-500   dark:text-gray-400"
                style={{
                  width: "100%",
                  padding: 20,
                  backgroundColor: "#242424",
                }}
              >
                <p style={{ fontSize: 14, color: "#fff", textAlign: "left" }}>
                Your Message
                </p>
                <input
                  type="text"
                  id="textInput"
                  style={{ width: "100%" }}
                  className="inoput"
                  placeholder="Type here"
                />
              </blockquote>
            </figure> 
          </div>

          <div style={{ width : 130 , height : 45 , backgroundColor : '#FFE601' , borderRadius : 10 ,
           marginBottom : 40 , padding : 12 , marginLeft : 'auto' , marginRight : 'auto' }} >
            <p style={{ color : '#000' , textAlign : 'center' }} >Submit</p>
          </div>


        </div>
      </div>
    </>
  );
};

export default Logo;
