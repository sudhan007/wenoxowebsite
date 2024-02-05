import Image from "next/image";

import Header from "./components/Header";
import Service from "./components/Service";
import Time from "./components/Time";
import Portfolio from "./components/Portfolio";
import Logo from "./components/Logo";
import Fotter from "./components/Fotter";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <div style={{ backgroundColor : '#1A1A1A' }} >
      <Header />
      <div style={{
        borderWidth: "0 0 1px 0",
        borderStyle: "solid",
        borderColor: "#262626",}} >

      </div>
      <div style={{ backgroundColor: "#1A1A1A" , marginRight : '10%' , marginLeft : '10%' }}>
        <Slider />
        <Service />
        <Time />
        <Portfolio />
        <Logo />
        <Fotter />  
      </div>
    </div >
  );
}
