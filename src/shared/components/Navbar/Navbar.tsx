import { FC } from "react";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  const menu = [
    { title: "Home", path: "/" },
    { title: "Contact Us", path: "contact-us" },
  ];

  return (
    <>
      <nav className="w-full bg-white flex justify-around items-center p-9">
        <div className="flex gap-5" data-aos="fade-down">
          {window.innerWidth < 768 && (
            <div>
              <img
                src="https://icon-library.com/images/menu-icon/menu-icon-6.jpg"
                width="50"
              />
            </div>
          )}

          <figure>
            <img
              src="https://static.wixstatic.com/media/c86aa8_b9d1a19b6fa148129b39180b7518a3ef~mv2.png/v1/fill/w_210,h_41,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bluepoint2-Logo-Solid-DrkBlue.png"
              alt="logo"
            />
          </figure>

          {window.innerWidth > 768 && (
            <ul className="flex justify-around items-center text-xs">
              {menu.map((item, index) => (
                <li
                  key={index}
                  className={`flex justify-around items-center min-w-[107px] text-[#b45ad3] border-[#d199e4] ${
                    index > 0 && "border-l"
                  }`}
                >
                  <Link to={item.path}>
                    <div className="text-center">
                      <p className="px-3 py-1 ">{item.title}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
