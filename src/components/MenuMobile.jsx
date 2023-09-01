import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import { data, subMenuData } from "../utils/menu";

const MenuMobile = ({ showCatMenu, setShowCatMenu, setMobileMenu }) => {
  return (
    <ul className="flex flex-col font-bold absolute top-[50px]  w-full h-[calc(100vh - 50px)] bg-gray-100 border-t text-black md:top-[80px] md:w-96 md:h-[100vh] right-0 ">
      {data?.map((item) => (
        <React.Fragment key={item.id}>
          {item?.subMenu ? (
            <li
              className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
              onClick={() => setShowCatMenu((prev) => !prev)}
            >
              <div
                className="flex justify-between items-center
              "
              >
                {item?.name}
                <BsChevronDown size={14} />
              </div>
              {showCatMenu && (
                <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                  {subMenuData?.map((i) => (
                    <Link
                      key={i.id}
                      to={`/category/${i.id}`}
                      onClick={() => setShowCatMenu(false)}
                    >
                      <li className="py-4 px-8 border-t flex justify-between">
                        {i.name}
                        <span className="opacity-50 text-sm">
                          {i.doc_count}
                        </span>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li className="py-4 px-5 border-b">
              <Link to={item?.url} onClick={() => setMobileMenu(false)}>
                {item?.name}
              </Link>
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default MenuMobile;
