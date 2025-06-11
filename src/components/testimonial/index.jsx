import { GrayStarIcon, YellowStarIcon } from "../../assets/icons/StarIcon";
import woman from "../../assets/woman.jpg";

const Testimonial = () => {
  return (
    <div className="mt-[150px] flex flex-col items-center gap-[20px]">
      <div className="flex flex-col items-center">
        <p className="text-[#DC780B] tracking-[2px] text-[14px]">TESTIMONIAL</p>
        <h1 className="font-[Philosopher] text-[24px]">
          Making Food great again and again
        </h1>
      </div>

      <p className="text-center text-[14px] w-[748px] text-[#999]">
        You need not only Just Food Stalls with Persons but also specialized
        equipment, Skills to manage Customers, Effective Product catlogues etc
        to make your.
      </p>

      <div className="mt-[90px] flex flex-col items-center gap-[20px]">
        <img
          src={woman}
          alt="Woman image"
          className="w-[70px] h-[70px] rounded-full object-cover"
        />

        <p className="text-center text-[14px] w-[748px] text-[#999]">
          You need not only Just Food Stalls with Persons but also specialized
          equipment, Skills to manage Customers, Effective Product catlogues etc
          very successful to make your.
        </p>

        <div className="flex gap-1">
          {Array.from({ length: 4 }, (_, i) => (
            <span key={i}>
              <YellowStarIcon />
            </span>
          ))}
          {Array.from({ length: 5 - 4 }, (_, i) => (
            <span key={i}>
              <GrayStarIcon />
            </span>
          ))}
        </div>

        <div className="flex flex-col items-center mt-1">
          <p className="text-black text-[12px]">AUGUSTA W. REYNOSO</p>
          <p className="text-[#999] text-[12px]">UI&UX DESIGNER</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
