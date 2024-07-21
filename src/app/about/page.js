import Image from "next/image";
import Image4 from "../../../public/Image4.jpeg";
import Image5 from "../../../public/Image5.JPG";
const About = () => {
  return (
    <>
      <section
        className="relative h-[100vh] bg-cover bg-center"
      >
        <Image
        src={Image4}
        width=''
        height=''
        className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-6xl font-bold">PICTURE</h1>
        </div>
      </section>

      {/* Horizontal line */}
      <div className="flex items-center mt-20 justify-center">
        <hr className="w-[90%] h-1 bg-random2" />
      </div>

      {/* Description */}

      <div className="max-w-screen-xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white shadow-lg rounded-lg p-4">
            <Image src={Image4} className="w-full aspect-square object-cover" />
            <h3 className="text-xl font-bold py-8 text-center">
              Maya-ika Lamar
            </h3>
            <p className="text-gray-700 mb-4">
              Maya-ika Lamar is a professionally trained art therapist with a
              deep commitment to healing and creative expression. With a
              Master’s Degree in Art Therapy and a diverse educational
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
            <Image src={Image4} className="w-full aspect-square object-cover" />
            <h3 className="text-xl font-bold py-8 text-center">
              Lamerphylla Kharsati
            </h3>
            <p className="text-gray-700 mb-4">
              Lamerphylla Damasha Kharsati is a Development Sector Professional
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
            <Image src={Image4} className="w-full aspect-square object-cover" />
            <h3 className="text-xl font-bold py-8 text-center">
              Dalarympei Kharramwphlang
            </h3>
            <p className="text-gray-700 mb-4">
              Dalarympei Sabina Kharramwplhang is a renowned culinary virtuoso
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
      {/* Horizontal line */}
      <div className="flex items-center mt-10 mb-28 justify-center">
        <hr className="w-[90%] h-1 bg-random2" />
      </div>

      {/* Coloured Line */}
      <div className="flex items-center mt-10 mb-28 justify-center">
        <hr className="w-full h-10 bg-random3" />
      </div>

      <div className="flex items-center justify-center gap-1">
        <div className="w-1/2">
          <Image src={Image4} className=" aspect-auto object-contain " />
        </div>
        <div className="w-1/2">
          <Image src={Image5} className=" aspect-auto object-contain " />
        </div>
      </div>
      <div className="w-full h-40 mt-10">
        <p className="lg:px-10 lg:text-3xl md:text-2xl text-sm sm:text-xl px-10 pb-10 font-semibold">
          Started as an art collaborative, PynChe was created by three women
          from different professional backgrounds. The initiative was started
          with the intention and mission to enable conversations around themes
          of environmental and cultural consciousness through various forms of
          art activities and engagements.
        </p>
      </div>
    {/* Horizontal Line */}
      <div className="flex items-center justify-center mt-10 py-10">
        <hr className="w-[90%] h-1 bg-random2 " />
      </div>
    </>
  );
};

export default About;
