import Image from "next/image";
import Logo from "../img/logo.png";

import v1 from "../img/v1.png";
import v2 from "../img/v2.png";
import v3 from "../img/v3.png";
import v4 from "../img/v4.png";
import v5 from "../img/v5.png";
import v6 from "../img/v6.png";

const Fotter = () => {
  return (
    <>
      <footer class="  rounded-lg shadow  " style={{ marginTop : 100 , marginBottom : 40 }}>
        <div
          class="w-full mx-auto   p-4 md:flex md:items-center md:justify-between"
          style={{ borderBottom: "1px solid #262626" }}
        >
          <Image src={Logo} alt="user photo" width={151} height={31} />
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a
                style={{ color: "#fff" }}
                href="#"
                class="hover:underline me-4 md:me-6"
              >
                About
              </a>
            </li>
            <li>
              <a
                style={{ color: "#fff" }}
                href="#"
                class="hover:underline me-4 md:me-6"
              >
                Service
              </a>
            </li>
            <li>
              <a
                style={{ color: "#fff" }}
                href="#"
                class="hover:underline me-4 md:me-6"
              >
                Work
              </a>
            </li>
            <li>
              <a style={{ color: "#fff" }} href="#" class="hover:underline">
                Proccess
              </a>
            </li>
            <li>
              <a
                style={{ color: "#fff" }}
                href="#"
                class="hover:underline me-4 md:me-6"
              >
                About
              </a>
            </li>
            <li>
              <a
                style={{ color: "#fff" }}
                href="#"
                class="hover:underline me-4 md:me-6"
              >
                Careers
              </a>
            </li>
            <li>
              <a style={{ color: "#fff" }} href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
          <div
            style={{
              border: "1px solid #262626",
              padding: 10,
              borderRadius: 5,
            }}
          >
            <blockquote class="max-w-2xl mx-auto   text-gray-500   dark:text-gray-400">
              <figcaption class="flex items-center justify-left ">
                <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                  <div style={{ fontSize: 15, color: "#fff", marginRight: 5 }}>
                    Stay Connected
                  </div>
                </div>
                <Image
                  src={v1}
                  alt="user photo"
                  width={60}
                  height={60}
                  style={{ marginRight: 5 }}
                />
                <Image
                  src={v2}
                  alt="user photo"
                  width={60}
                  height={60}
                  style={{ marginRight: 5 }}
                />
                <Image
                  src={v3}
                  alt="user photo"
                  width={60}
                  height={60}
                  style={{ marginRight: 5 }}
                />
              </figcaption>
            </blockquote>
          </div>
        </div>

        <div
          class="w-full mx-auto   p-4 md:flex md:items-left md:justify-between"
          style={{ borderBottom: "1px solid #262626", marginTop: 30 , paddingBottom : 20 }}
        >
          <blockquote class="  text-gray-500   dark:text-gray-400">
            <figcaption class="flex items-left justify-left ">
              <Image
                src={v4}
                alt="user photo"
                width={24}
                height={24}
                style={{ marginLeft: 5 }}
              />
              <div
                style={{
                  fontSize: 12,
                  color: "#E6E6E6",
                  marginLeft: 3,
                  marginRight: 10,
                  marginTop: 4,
                }}
              >
                info@wenoxo.in
              </div>

              <Image
                src={v5}
                alt="user photo"
                width={24}
                height={24}
                style={{ marginLeft: 5 }}
              />
              <div
                style={{
                  fontSize: 12,
                  color: "#E6E6E6",
                  marginLeft: 3,
                  marginRight: 10,
                  marginTop: 4,
                }}
              >
                +91 91813 23 2309
              </div>
              <Image
                src={v6}
                alt="user photo"
                width={24}
                height={24}
                style={{ marginLeft: 5 }}
              />
              <div
                style={{
                  fontSize: 12,
                  color: "#E6E6E6",
                  marginLeft: 3,
                  marginRight: 10,
                  marginTop: 4,
                }}
              >
                Somewhere in the World
              </div>
            </figcaption>
          </blockquote>
          <p style={{ fontSize: 15, color: "#98989A" }}>
            © 2024 WenoxoTechnology. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Fotter;
