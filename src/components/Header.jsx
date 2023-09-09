import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import MenuMobile from "./MenuMobile";

import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [profile, setProfile] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
    // eslint-disable-next-line
  }, [lastScrollY]);

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] flex justify-between items-center z-20 sticky top-0 transition-transform duration-300 ${show} shadow-md bg-white`}
    >
      <Wrapper className="flex justify-between items-center h-[60px]">
        <Link to="/" className="flex items-center">
          <h1 className="font-tourney font-semibold text-lg lg:text-2xl tracking-widest">
            AHALE
          </h1>
        </Link>

        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
          />
        )}

        <div className="flex items-center gap-2 text-black">
          {/* Icon Start */}
          {/* <Link to="/" className="flex items-center gap-2 text-black">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg"
              alt="Become a Seller"
            />
            <div className="hidden lg:flex">Become a Seller</div>
          </Link> */}
          {/* Icon End */}
          {/* Icon Start */}
          <Link to="/cart">
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
              <BsCart className="text-[18px] md:text-[20px]" />
              <div className="h-[14px] md:h-[18px] min-w-[18px] rounded-full bg-red-600 absolute top-1  left-5 md:left-7 text-white text-[10px] md-text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                0
              </div>
            </div>
          </Link>
          {/* Icon End */}

          {/* Icon Start */}
          <Link
            to="/"
            onMouseEnter={() => setProfile(true)}
            onMouseLeave={() => setProfile(false)}
          >
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
              <FiUser className="text-[18px] md:text-[20px]" />

              {profile && (
                <ul className="bg-white absolute top-10 lg:top-[48px] left-[-30px] min-w-[80px] lg:min-w-[120px] px-1 py-1 shadow-lg rounded-sm">
                  <li
                    className="h-6 lg:h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md"
                    onClick={() => {}}
                  >
                    Log In
                  </li>
                </ul>
              )}
            </div>
          </Link>
          {/* Icon End */}
          {/* Mobile Icon Start */}

          <div
            className=" w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2"
            onClick={() => setMobileMenu((prev) => !prev)}
          >
            {mobileMenu ? (
              <VscChromeClose className="text-[20px]" />
            ) : (
              <BiMenuAltRight className="text-[25px] flex " />
            )}
          </div>

          {/* Mobile Icon End */}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
