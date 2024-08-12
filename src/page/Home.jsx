const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#303132] w-full min-h-screen">
      <div className="flex flex-col justify-evenly p-6 lg:w-1/2 lg:items-start mt-10 sm:items-center sm:text-center">
        <div className="flex flex-col justify-evenly lg:items-start lg:flex-none">
          <h1 className="text-5xl font-extrabold mb-4 text-yellow-500 mt-auto lg:mt-5 lg:ml-0">
            BURGER KING
          </h1>
          <p className="mb-6 text-gray-300 lg:text-start">
            Nefis Lezzetiyle Muhteşem Burgerin Tadını Çıkar
          </p>
        </div>
        <button className="bg-yellow-500 hover:opacity-80 shadow-2xl font-extrabold text-xl text-black px-8 py-4 rounded mt-auto lg:mt-5">
          Sipariş Ver
        </button>
      </div>
      <div className="flex justify-center  items-center lg:w-1/2">
        <img
          src="./images/header-burger.png"
          className="w-full h-auto"
          alt="Burger"
        />
      </div>
    </div>
  );
};

export default Home;
