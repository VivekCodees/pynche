const Contacts = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-green-200 to-green-300 p-4 ">
        <div className="w-full max-w-md bg-gray-100 p-8 rounded-lg shadow-lg mt-36">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
            CONTACT US
          </h1>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <textarea
                placeholder="About"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
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
  );
};

export default Contacts;
