import { YellowStarIcon, GrayStarIcon } from "../../assets/icons/StarIcon";

const MenuItems = ({ image, title, price, desc, stars }) => {
  return (
    <div className="flex flex-col items-start gap-[10px] border-[1px] border-gray-300 rounded-tl-[75px] rounded-tr-[25px] rounded-b-[10px]  pb-[20px]">
      <img
        className="w-[300px] rounded-tl-[75px] rounded-tr-[25px] rounded-br-[75px]"
        src={image}
        alt="Food image"
      />

      <div className="flex justify-between w-[300px] px-[10px]">
        <h2 className="font-[Philosopher] font-bold text-2xl">{title}</h2>
        <h2 className="font-[Philosopher] font-bold text-2xl">{price}</h2>
      </div>

      <p className="text-[#999] text-[14px] w-[300px] px-[10px]">{desc}</p>

      <div className="flex justify-between w-[300px] px-[10px]">
        <button className="flex w-[35px] h-[35px] bg-[#DC780B] text-white rounded-[5px] text-2xl items-center justify-center">
          +
        </button>

        <div className="flex gap-1">
          {Array.from({ length: stars }, (_, i) => (
            <span key={i}>
              <YellowStarIcon />
            </span>
          ))}
          {Array.from({ length: 5 - stars }, (_, i) => (
            <span key={i}>
              <GrayStarIcon />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
