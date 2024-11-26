import React from 'react'
import Image from "next/image";

const HeroSection = () => {
  return <section>
    <div className= "grid grid-cols-1 lg:grid-cols-12">
      <div className= "cols-span-7 place-self-center">
        <h1 className="text-white mb-4 lg:text-4xl font-extrabold">
        Hello, I'm Preston
        </h1>
      <p className="text-[#ADB7BE] test-lg lg:text-xl">
        Welcome to my page!
      </p>
      </div>
      <div className="col-span-5"></div>
      <Image
        src="/Images/website_pic.JPEG"
        alt="web pic"
        width={300}
        height={500}
        />
    </div>
  </section>;
}

export default HeroSection