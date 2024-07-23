import Image from "next/image";
import Image3 from "../../../public/Image3.jpg";

const GetInTouch = () => {
  return (
    <>
      <div className="relative flex items-center justify-center min-h-screen p-4">
        <Image
          src={Image3}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
        <div className="relative py-20 w-full max-w-md text-white border border-opacity-60 border-black bg-white bg-opacity-5 backdrop-blur-sm p-8 rounded-lg shadow-lg mt-10 z-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
            CONTACT US
          </h1>
          <form className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 bg-transparent rounded-none border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 bg-transparent rounded-none border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <textarea
                placeholder="About"
                className="w-full p-3 bg-transparent rounded-none border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                rows="4"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-green-700 text-white p-3 rounded-lg hover:bg-green-800 transition duration-300"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default GetInTouch
