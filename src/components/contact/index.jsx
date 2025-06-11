const Contact = () => {
  return (
    <div className="w-[100%] h-[448px] mt-[150px] bg-[#FBF1E7] flex flex-col items-center justify-center gap-[20px]">
      <p className="text-[#DC780B] tracking-[2px]">CONTACT</p>
      <div className="flex flex-col items-center">
        <h1 className="font-[Philosopher] text-2xl font-bold">
          Food Stalls with Persons but also specialized
        </h1>
        <h1 className="font-[Philosopher] text-2xl font-bold">
          equipment, Skills to manage.
        </h1>
      </div>

      <div className="flex gap-[30px]">
        <input
          type="text"
          className="w-[380px] h-[45px] border-[1px] bg-white border-[#DC780B] rounded-[5px] pl-[5px] text-[16px]"
          placeholder="Enter your message"
        />
        <button className="w-[156px] h-[45px] bg-[#DC780B] text-white rounded-[5px] cursor-pointer">
          Send
        </button>
      </div>
    </div>
  );
};

export default Contact;
