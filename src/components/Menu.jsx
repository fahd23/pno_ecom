import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import { data, subMenuData } from "/src/utils/menu";

const Menu = ({ showCatMenu, setShowCatMenu }) => {
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">
      {data?.map((item) => (
        <React.Fragment key={item.id}>
          {item?.subMenu ? (
            <li
              className="cursor-pointer flex items-center gap-2 relative"
              onMouseEnter={() => setShowCatMenu(true)}
              onMouseLeave={() => setShowCatMenu(false)}
            >
              {item?.name}
              <BsChevronDown size={14} />
              {showCatMenu && (
                <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 shadow-lg text-black">
                  {subMenuData?.map((i) => (
                    <Link key={i.id} to={`/category/${i.id}`}>
                      <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
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
            <li className="cursor-pointer">
              <Link to={item?.url}>{item?.name}</Link>
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default Menu;
