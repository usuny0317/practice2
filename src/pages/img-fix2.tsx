const ImgFix2 = () => {
  return (
    <div className="relative flex flex-col text-bold text-[#83f97d]">
      ImgFix
      <img src="/pika.jpg" />
      <button className="absolute top-[120px] left-[80px] transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white text-black px-6 py-3 rounded shadow-lg">
        고정 버튼
      </button>
    </div>
  );
};

export default ImgFix2;
