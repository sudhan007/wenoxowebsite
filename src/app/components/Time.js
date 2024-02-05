import Image from "next/image";
import Bg1 from "../img/bg1.png";
import fr from "../img/fr.png";

const Time = () => {
  return (
    <>
      <p
        style={{
          color: "#fff",
          fontSize: 30,
          fontWeight: "700",
          textAlign: "center", 
          marginTop: 90,
        }}
      >
        Time to <span style={{ color: "#FFE600" }}>Delivery</span>
      </p>
      <div class="grid    rounded-lg shadow-sm    md:grid-cols-2 ">
        <figure class="flex flex-col items-center justify-center p-8 text-center   rounded-t-lg md:rounded-t-none md:rounded-ss-lg  ">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <p style={{ color: "#A7ABB6", fontSize: 11, textAlign: "left" }}>
              Why Choose Us
            </p>
            <p
              style={{
                color: "#fff",
                fontSize: 30,
                fontWeight: "700",
                textAlign: "left",
              }}
            >
              <span style={{ color: "#FFE600" }}>Fast Work</span> is our{" "}<br />
              focus
            </p>
            <p
              style={{
                color: "#fff",
                fontSize: 16,
                marginTop: 5,
                fontWeight: "700",
                textAlign: "left",
              }}
            >
              Get Your delivered on time
            </p>
          </blockquote>
        </figure>
        <figure class="flex flex-col items-center justify-center p-8 text-center   rounded-t-lg md:rounded-t-none md:rounded-ss-lg  ">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <Image src={fr} alt="user photo" width={500} height={480} />
          </blockquote>
        </figure>
      </div>
    </>
  );
};

export default Time;
