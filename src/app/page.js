import Image from "next/image";
import Image1 from "../../public/Image1.JPG";
import Image2 from "../../public/Image2.jpg";
import Image3 from "../../public/Image3.jpg";
import home_images from "../../public/home_images.png";

//Fonts
import { Inter, Adamina, Alegreya } from "next/font/google";

const adamina = Adamina({ subsets: ["latin"], weight: '400' });
const alegreya = Alegreya({ subsets: ["latin"] });

export default function Home() {
  return (

    <div className="overflow-x-hidden">
      <section className="relative h-screen w-screen bg-cover bg-center">
        <Image
          src={Image3}
          layout="fill"
          objectFit="cover"
          alt="Video Background"
          className="w-full h-full"
        />
        <div className="absolute z-0 inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <h1 className={`text-white text-4xl md:text-5xl z-10 lg:text-8xl font-bold  ${adamina.className}`}>
            Pynche "Illumine"
          </h1>
        </div>
      </section>

      {/* New */}
      <section className="relative min-h-[44rem] bg-white px-4">
        <div className="h-fit">
          <div className=" absolute lg:top-60 top-16 left-10 lg:left-40 hover:scale-110 transition duration-500">
            <div className="w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] shadow-xl rounded-full overflow-hidden cursor-pointer">
              <Image
                loading="lazy"
                src={Image1}
                alt="Image 1"
                className="w-full h-full object-cover"
              />
            </div>
            <p className={`text-center lg:mt-5 mt-2 lg:text-xl text-lg ${alegreya.className}`}>Forest Fusion</p>
          </div>
          <div className=" absolute lg:top-20 top-56 right-10 lg:right-[calc(50svw-175px)] hover:scale-110 transition duration-500">
            <div className="w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] shadow-xl rounded-full overflow-hidden cursor-pointer">
              <Image
                loading="lazy"
                src={Image2}
                alt="Image 1"
                className="w-full h-full object-cover"
              />
            </div>
            <p className={`text-center lg:mt-5 mt-2 lg:text-xl text-lg ${alegreya.className}`}>Kilometre Zero</p>
          </div>
          <div className=" absolute lg:top-80 top-96 mt-5 ml-10 lg:ml-0 lg:right-40 hover:scale-110 transition duration-500">
            <div className="w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] shadow-xl rounded-full overflow-hidden cursor-pointer">
              <Image
                loading="lazy"
                src={Image3}
                alt="Image 1"
                className="w-full h-full object-cover"
              />
            </div>
            <p className={`text-center lg:mt-5 mt-2 lg:text-xl text-lg ${alegreya.className}`}>A Symphony of Senses</p>
          </div>
        </div>
      </section>

      {/* Text Below Circles */}
      <section className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8 lg:space-x-12 py-8 bg-gray-100 text-center">
        <div>
          <p className="font-bold text-xl md:text-2xl lg:text-3xl">
            Forest Fusion
          </p>
        </div>
        <div>
          <p className="font-bold text-xl md:text-2xl lg:text-3xl">
            Kilometre Zero
          </p>
        </div>
        <div>
          <p className="font-bold text-xl md:text-2xl lg:text-3xl">
            A Symphony of Senses
          </p>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="w-full">
        {/* <div className="col-span-1"> */}
          <Image
            src={home_images}
            alt="Image 4"
            className="w-full h-full object-cover"
          />
      </section>

      {/* Reserve Button */}
      <section className="flex justify-center my-8">
        <button className="bg-[#515549] text-white px-12 py-2 rounded-lg hover:bg-green-800">
          RESERVE NOW
        </button>
      </section>
      {/* Horizontal line */}
      <div className="flex items-center justify-center">
        <hr className="w-[90%] border-b border-black" />
      </div>
    </div>
  );
}
