import Image from "next/image";
import Image6 from "../../../public/Image6.jpg";
import Event2 from "../../../public/Event2.jpg";
import Event3 from "../../../public/Event3.jpg";
const Events = () => {
  return (
    <div className="bg-gradient-to-b from-random3 to-random4">
    <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-8 h-auto md:h-[60vh]">
      <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold text-white mt-28 md:mt-36 lg:mt-60 mx-4 md:mx-8 lg:mx-16">
        EVENTS
      </h1>
      <div className="relative w-full md:w-1/2 lg:w-1/3 h-[40vh] md:h-[50vh] lg:h-2/3 mt-8 md:mt-36 lg:mr-20">
        <Image
          src={Image6}
          alt="Sample Image"
          layout="fill"
          objectFit="cover"
          className="border border-black"
        />
      </div>
    </div>
    
    <div className="flex items-center mt-10 pb-10 md:mt-20 justify-center">
      <hr className="w-[90%] md:w-[80%] h-1 bg-white" />
    </div>

    <div className="flex flex-col md:flex-row items-center justify-center h-auto md:h-[50vh] mb-20 ">
      <div className="w-full md:w-1/2">
        <Image
          src={Event2}
          alt="EventImage"
          className="w-full h-[50vh] md:h-[70vh] px-4 object-contain lg:object-contain lg:p-20"
        />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-4">
        <h1 className="text-2xl md:text-4xl font-bold mb-10 text-white py-4 ">FOREST FUSION</h1>
        <p className="text-base md:text-lg mb-6 text-white ">
          ASDFNASOFNSODFNSNF SDAFJSDFNDSFNSDF DSFANSDFIASDFINSDF SDFAIJMODSFINMWEFWE NSADFNNFEWRFSDOF ASDFIONDASOEF OISAFNMAIOSNFOS IFSDANFOA OINFSAONSFN ANFSENFJMFWIRTJFS NASDNFOASNDF.
        </p>
        <button className="bg-random text-random5 text-xl md:text-3xl py-2 px-4 md:px-6 rounded-lg mr-4 font-semibold">
          EXPLORE
        </button>
        <a href="#" className="text-white text-xl md:text-2xl">
          Read More
        </a>
      </div>
    </div>
    
    <div className="flex items-center mt-10 pb-10 md:mt-20 justify-center">
      <hr className="w-[90%] md:w-[80%] h-1 bg-white" />
    </div>

    <div className="flex flex-col md:flex-row items-center justify-center h-auto md:h-[50vh] mb-20">
      <div className="w-full md:w-1/2">
        <Image
          src={Event2}
          alt="EventImage"
          className="w-full h-[50vh] md:h-[70vh] px-4 object-contain lg:object-contain lg:p-20"
        />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-4 ">
        <h1 className="text-2xl md:text-4xl font-bold mb-6 text-white py-4">KILOMETRE ZERO</h1>
        <p className="text-base md:text-lg mb-6 text-white">
          ASDFNASOFNSODFNSNF SDAFJSDFNDSFNSDF DSFANSDFIASDFINSDF SDFAIJMODSFINMWEFWE NSADFNNFEWRFSDOF ASDFIONDASOEF OISAFNMAIOSNFOS IFSDANFOA OINFSAONSFN ANFSENFJMFWIRTJFS NASDNFOASNDF.
        </p>
        <button className="bg-random text-random5 text-xl md:text-3xl py-2 px-4 md:px-6 rounded-lg mr-4 font-semibold">
          EXPLORE
        </button>
        <a href="#" className="text-white text-xl md:text-2xl">
          Read More
        </a>
      </div>
    </div>
    
    <div className="flex items-center mt-10 pb-10 md:mt-20 justify-center">
      <hr className="w-[90%] md:w-[80%] h-1 bg-white" />
    </div>

    <div className="flex flex-col md:flex-row items-center justify-center h-auto md:h-[50vh] mb-20">
      <div className="w-full md:w-1/2">
        <Image
          src={Event2}
          alt="EventImage"
          className="w-full h-[50vh] md:h-[70vh] px-4 object-contain lg:object-contain lg:p-20"
        />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-4">
        <h1 className="text-2xl md:text-4xl font-bold mb-6 text-white py-4">A SYMPHONY OF SENSES</h1>
        <p className="text-base md:text-lg mb-6 text-white">
          ASDFNASOFNSODFNSNF SDAFJSDFNDSFNSDF DSFANSDFIASDFINSDF SDFAIJMODSFINMWEFWE NSADFNNFEWRFSDOF ASDFIONDASOEF OISAFNMAIOSNFOS IFSDANFOA OINFSAONSFN ANFSENFJMFWIRTJFS NASDNFOASNDF.
        </p>
        <button className="bg-random text-random5 text-xl md:text-3xl py-2 px-4 md:px-6 rounded-lg mr-4 font-semibold">
          EXPLORE
        </button>
        <a href="#" className="text-white text-xl md:text-2xl">
          Read More
        </a>
      </div>
    </div>
    
    <div className="flex items-center mt-10 pb-10 md:mt-20 justify-center">
      <hr className="w-[90%] md:w-[80%] h-1 bg-white" />
    </div>

    <div className="w-full mb-24 px-4 md:px-20">
      <p className="text-base md:text-2xl font-semibold pb-10 text-white">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
  </div>
  );
};

export default Events;
