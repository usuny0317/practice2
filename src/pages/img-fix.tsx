const ImgFix = () => {
  return (
    <div className="relative flex items-center justify-center  w-full bg-[url('/getbono.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="relative flex flex-col text-bold text-[#83f97d]">
        ImgFix
        <img src="/pika.jpg" />
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white text-black px-6 py-3 rounded shadow-lg">
          고정 버튼
        </button>
      </div>
    </div>
  );
};

export default ImgFix;
