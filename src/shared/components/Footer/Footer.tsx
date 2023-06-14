import { FC } from "react";

const Footer: FC = () => {
  const menu = [{ title: "Home" }, { title: "Contact Us" }];

  return (
    <div className="flex flex-col items-center justify-center gap-4 pt-12 pb-5 px-[30%] bg-black">
      <ul className="flex justify-around items-center text-xs flex-wrap">
        {menu.map((item, index) => (
          <li
            key={index}
            className={`flex justify-around items-center flex-wrap text-[#b45ad3] border-[#d199e4] ${
              index > 0 && "border-l"
            }`}
          >
            <div className="text-center">
              <p className="px-7 py-1 ">{item.title}</p>
            </div>
          </li>
        ))}
      </ul>

      <span className="text-gray font-helvetica text-[12px]">
        © 2021 bluepoint2
      </span>
    </div>
  );
};

export default Footer;
