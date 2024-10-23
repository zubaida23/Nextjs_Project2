import React from "react";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import Image from "next/image";
import heroStyle from "./hero.module.css";

const Hero = () => {
  return (
    <>
      <Header />
      <div className={heroStyle.hero}>
        <h1 className={heroStyle.h1}>Stir & Brew the Fresh Aroma of Coffee</h1>

        <p className={heroStyle.p}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum repellat
          rerum id ullam, consectetur nam veritatis suscipit sed incidunt
          beatae, impedit eveniet explicabo commodi ad sapiente ratione dolores
          veniam minus repudiandae voluptates!
        </p>

        <button className={heroStyle.button}>Read More.</button>
        <Image
          src="/images.jpeg"
          alt=""
          width={100}
          height={100}
          className={heroStyle.Image}
        />
      </div>
      <Footer />
    </>
  );
};

export default Hero;