import Image from "next/image";
import Image1 from "../assests/Image1.JPG";
import Image2 from "../assests/Image2.jpg";
import Image3 from "../assests/Image3.jpg";

export default function Home() {
  return (
    // <div>
    //   {/* Video Section */}
    //   <section
    //     className="relative h-[100vh] bg-cover bg-center w-[100vw]"
    //   >
    //     <Image
    //     src={Image3}
    //     width=''
    //     height=''
    //     className="w-full h-full object-cover"
    //     />
    //     <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
    //       <h1 className="text-white text-4xl font-bold">VIDEO</h1>
    //     </div>
    //   </section>

    //

    //   {/* Text Below Circles */}
    //   <section className="flex justify-center items-center space-x-56 h-[10vh] bg-random text-center">
    //     <div>
    //       <p className="font-bold text-2xl">Forest Fusion</p>
    //     </div>
    //     <div>
    //       <p className="font-bold text-2xl">Kilometre Zero</p>
    //     </div>
    //     <div>
    //       <p className="font-bold text-2xl">A Symphony of Senses</p>
    //     </div>
    //   </section>

    //   {/* Image Grid Section */}
    //   <section className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
    //     <div className="col-span-1">
    //       <Image

    //         src={Image1}
    //         alt="Image 4"
    //         className="w-full h-full object-cover"
    //       />
    //     </div>
    //     <div className="col-span-1 flex flex-col space-y-4">
    //       <div className="flex-grow">
    //         <Image
    //           src={Image2}
    //           alt="Image 5"
    //           className="w-full h-full object-cover"
    //         />
    //       </div>
    //       <div className="flex-grow">
    //         <Image
    //           src={Image3}
    //           alt="Image 6"
    //           className="w-full h-full object-cover"
    //         />
    //       </div>
    //     </div>
    //   </section>

    //   {/* Reserve Button */}
    //   <section className="flex justify-center my-8">
    //     <button className="bg-green-700 text-white px-12 py-2 rounded-lg hover:bg-green-800">
    //       RESERVE NOW
    //     </button>
    //   </section>

    <div className="overflow-x-hidden">
      {/* Video Section */}
      <section className="relative h-screen w-screen bg-cover bg-center">
        <Image
          src={Image3}
          layout="fill"
          objectFit="cover"
          alt="Video Background"
          className="w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-4xl md:text-5xl z-10 lg:text-6xl font-bold">
            VIDEO
          </h1>
        </div>
      </section>

      {/* Circle Image Section Trial
      <section className="flex flex-col md:flex-row z-10  justify-center items-center h-[30vh] bg-white  px-4 md:px-8 lg:px-12 space-y-8 md:space-y-0 md:space-x-12 lg:space-x-16">
        <div className="w-36 h-36 absolute md:w-52 md:h-52 rounded-full overflow-hidden ">
          <Image
            loading="lazy"
            src={Image1}
            alt="Image 1"
            layout="fill"
            objectFit="cover"
            className=""/>
        </div>
      </section>
      <section className="flex flex-col md:flex-row z-10  justify-center items-center h-[30vh] bg-white px-4 md:px-8 lg:px-12 space-y-8 md:space-y-0 md:space-x-12 lg:space-x-16">
        <div className="w-36 h-36 absolute md:w-52 md:h-52 rounded-full overflow-hidden ">
          <Image
            loading="lazy"
            src={Image2}
            alt="Image 1"
            layout="fill"
            objectFit="cover"
            className=""/>
        </div>
      </section>
      <section className="flex flex-col md:flex-row z-10  justify-center items-center h-[30vh] bg-white  px-4 md:px-8 lg:px-12 space-y-8 md:space-y-0 md:space-x-12 lg:space-x-16">
        <div className="w-36 h-36 absolute md:w-52 md:h-52 rounded-full overflow-hidden ">
          <Image
            loading="lazy"
            src={Image3}
            alt="Image 1"
            layout="fill"
            objectFit="cover"
            className=""/>
        </div>
      </section> */}

      {/* Circle Image Section */}

      {/* flex flex-col md:flex-row z-10  justify-center items-center h-[30vh] bg-white  px-4 md:px-8 lg:px-12 space-y-8 md:space-y-0 md:space-x-12 lg:space-x-16 */}
      {/*  */}
      {/* <section className="flex flex-wrap justify-center h-[90vh] bg-white space-x-44">
        <div className="w-52 h-52 mt-72 rounded-full overflow-hidden">
          <Image
            loading="lazy"
            src={Image1}
            alt="Image 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-52 h-52 mt-20 rounded-full overflow-hidden">
          <Image
            loading="lazy"
            src={Image2}
            alt="Image 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-52 h-52 mt-72 rounded-full overflow-hidden">
          <Image
            loading="lazy"
            src={Image3}
            alt="Image 3"
            className="w-full h-full object-cover"
          />
        </div>
      </section> */}

      {/* New */}
      <section className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-white px-4 space-y-8 md:space-y-0 md:space-x-16 lg:space-x-24">
        <div className="w-32 h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 rounded-full overflow-hidden">
          <Image
            loading="lazy"
            src={Image1}
            alt="Image 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-32 h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 rounded-full overflow-hidden">
          <Image
            loading="lazy"
            src={Image2}
            alt="Image 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-32 h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 rounded-full overflow-hidden">
          <Image
            loading="lazy"
            src={Image3}
            alt="Image 3"
            className="w-full h-full object-cover"
          />
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
      <section className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <div className="col-span-1">
          <Image
            src={Image1}
            alt="Image 4"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 flex flex-col space-y-4">
          <div className="flex-grow">
            <Image
              src={Image2}
              alt="Image 5"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-grow">
            <Image
              src={Image3}
              alt="Image 6"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Reserve Button */}
      <section className="flex justify-center my-8">
        <button className="bg-green-700 text-white px-12 py-2 rounded-lg hover:bg-green-800">
          RESERVE NOW
        </button>
      </section>
      {/* Horizontal line */}
      <div className="flex items-center justify-center">
        <hr className="w-[90%] h-1 bg-random2" />
      </div>
    </div>
  );
}
