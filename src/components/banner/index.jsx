import phone from "../../assets/phone.png";

const Banner = () => {
  return (
    <div className="w-[100%] h-[518px] bg-[#FBF1E7] mt-[150px] p-[100px] flex justify-center items-center gap-[60px]">
      <div className="flex flex-col w-[50%] gap-[20px]">
        <p className="text-[#DC780B] tracking-[2px]">TAKE AWAY</p>
        <h1 className="font-[Philosopher] text-[30px] w-[400px]">
          Food Stalls with Persons but to Product marketing plane.{" "}
        </h1>

        <p className="text-[#999] text-[14px] w-[450px]">
          There are many things are needed to start the Fast Food Business. You
          need not only Just Food Stalls with Persons but also specialized
          equipmentwith Persons but also Just Food Stalls with Persons.
        </p>

        <div className="flex justify-start gap-[20px]">
          <button className="bg-[#150C01] text-[white] w-[163px] h-[48px] rounded-[5px] cursor-pointer">
            App Store
          </button>
          <button className="text-[#150C01] w-[163px] h-[48px] border-[1px] border-[#999] rounded-[5px] cursor-pointer">
            Google Play
          </button>
        </div>
      </div>

      <img src={phone} alt="Phone image" className="w-[300px]" />
    </div>
  );
};

export default Banner;
