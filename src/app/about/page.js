import Image from "next/image";
import Image4 from "../../../public/Image4.jpeg";
import Image5 from "../../../public/Image5.JPG";
import maya from "../../../public/maya.png";
import lamer from "../../../public/lamer.png";
import dala from "../../../public/dala.png";


//Fonts
import { Adamina, Alegreya } from "next/font/google";
import Link from "next/link";

const adamina = Adamina({ subsets: ["latin"], weight: '400' });
const alegreya = Alegreya({ subsets: ["latin"] });


const About = () => {
  return (
    <>
      <section className="relative h-screen w-screen bg-cover bg-center">
        <Image
          src={Image3}
          layout="fill"
          objectFit="cover"
          alt="Background"
          className="w-full h-full"
        />
        <div className="absolute z-0 inset-0 flex flex-col items-center justify-between py-20 pt-60 bg-black bg-opacity-60">
          <h1 className={`text-white px-5 leading-8 text-center text-4xl md:text-4xl z-10 lg:text-6xl font-bold ${adamina.className}`}>
            PynChe<br />
            <span className="text-lg md:text-xl px-5 lg:text-2xl italic font-light leading-tight">"pin-chae"</span>
          </h1>
          {/* <h1 className={`text-white px-5 leading-relaxed text-center text-4xl md:text-4xl z-10 lg:text-6xl font-bold ${adamina.className}`}>
            PynChe means 'illumine' in Pnar.<br />
            <span className="text-lg md:text-xl px-5 lg:text-2xl italic font-light leading-tight">Pnar is a language which is spoken by the tribes of Jaintia Hills in Meghalaya.</span>
          </h1> */}
          <div>
            <h2 className={`text-lg md:text-xl px-5 lg:text-2xl text-center font-light leading-tight text-white ${adamina.className}`}>meaning 'illumine' in Pnar</h2>
            <h3 className={`text-lg md:text-xl px-5 lg:text-2xl text-center font-light leading-tight text-white ${adamina.className}`}>Pnar is a language which is spoken by the tribes of Jaintia Hills in Meghalaya.</h3>
          </div>
        </div>
      </section>

      {/* Description */}

      <div className="w-full h-40 mt-10">
        <p className={`lg:text-3xl md:text-2xl sm:text-xl px-5 pb-10 font-semibold lg:px-40 ${alegreya.className}`}>
          PynChe started as an art collaborative. It was created by three women
          from different professional backgrounds. The initiative was started
          with the intention and mission to enable conversations around themes
          of environmental and cultural consciousness through various forms of
          art activities and engagements.
        </p>
      </div>

      <div className="max-w-screen-xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white shadow-lg rounded-lg p-4">
            <Image src={maya} className="w-full aspect-square object-cover" alt='Maya-ika Lamar'/>
            <h3 className="text-xl font-bold py-8 pb-2 text-left">
              Maya-ika Lamar
            </h3>
            <p className={`text-gray-700 mb-4 ${alegreya.className}`}>
              Maya-ika Lamar is a professionally trained art therapist with a
              deep commitment to healing and creative expression. With a
              Master&apos;s Degree in Art Therapy and a diverse educational
              background in psychology and counselling, she brings a wealth of
              expertise to her practice. From working with individuals facing
              substance abuse disorders to counselling therapy sessions for
              adolescents on the autism spectrum, Maya-ika is dedicated to
              making a meaningful impact in the lives of others. Her passion for
              social causes and dedication to empathy and creativity make her a
              valuable asset to any team or project.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <Image src={lamer} className="w-full aspect-square object-cover" alt='Lamerphylla Kharsati'/>
            <h3 className="text-xl font-bold py-8 pb-2 text-left">
              Lamerphylla Kharsati
            </h3>
            <p className={`text-gray-700 mb-4 ${alegreya.className}`}>
              Lamerphylla Damesha Kharsati is a Development Sector Professional
              with a multifaceted background spanning research, program
              management, fundraising, and communications. With a strong
              foundation in public health, climate action, and social
              entrepreneurship, she brings a unique blend of skills to the realm
              where social impact, cultural artistry, and self-discovery
              converge. She is committed to creating transformative experiences
              that bridge the worlds of nature, tradition, and personal growth.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <Image src={dala} className="w-full aspect-square object-cover" alt='Dalarympei Kharmawphlang'/>
            <h3 className="text-xl font-bold py-8 pb-2 text-left">
              Dalarympei Kharmawphlang
            </h3>
            <p className={`text-gray-700 mb-4 ${alegreya.className}`}>
              Dalarympei Sabrina Kharmawphlang is a renowned culinary virtuoso
              renowned for her expertise cultivated across diverse culinary
              landscapes. With a background steeped in crafting exquisite
              gastronomic experiences and operations, she has honed her culinary
              finesse at prestigious establishments in Bangalore, New Delhi,
              Florence, and Milan. Her passion for fine dining and gastronomy
              shines through in her unwavering commitment to curating
              exceptional culinary experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Coloured Line */}
      <div className="flex items-center mt-10 justify-center">
        <hr className="w-full h-10 bg-random3" />
      </div>

      {/* Reserve Button */}
      <section className="flex justify-center my-8">
        <Link href="https://onlybees.in/event/pynche">
          <button className="bg-[#515549] text-white px-12 py-2 rounded-lg hover:bg-green-800">
            RESERVE NOW
          </button>
        </Link>
      </section>

      <div className="flex lg:flex-row flex-col items-center justify-center lg:px-40">
        <div className="lg:w-1/2 px-5">
          <Image src={Image4} className=" aspect-square object-cover " alt='About PynChe Image 1'/>
        </div>
        <div className="lg:w-1/2 px-5">
          <Image src={Image5} className=" aspect-square object-cover object-bottom" alt='About PynChe Image 2'/>
        </div>
      </div>
      
    {/* Horizontal Line */}
      <div className="flex items-center justify-center mt-10 py-10">
        <hr className="w-[90%] h-1 bg-random2 " />
      </div>
    </>
  );
};

export default About;
