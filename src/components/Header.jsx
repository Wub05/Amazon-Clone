import { Link } from "react-router-dom";
import { imagesData } from "../constants/images";
import { CiLocationOn } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { DataContext } from "./dataProvider/DataProvider";
import { useContext } from "react";

const Header = () => {
  const [{ cart }, dispatch] = useContext(DataContext);

  return (
    <header className="bg-header_bg text-white relative top-0 mt-0">
      <section
        className="relative flex justify-around items-center gap-1 mt-2 py-6 h-[3.5rem] 
      "
      >
        <div className="flex items-center gap-1 left-0 ml-[-5.5rem] mr-[6rem] ">
          {/* logo */}
          <Link to="/">
            <img
              src={imagesData.Amazon_Logo}
              alt="amazon logo"
              className="w-full h-[9rem] mr-[-2rem]"
            />
          </Link>
          {/* delivery */}
          <span>
            <CiLocationOn
              size={20}
              className="font-bold mr-[-0.3rem] mb-[-0.3rem]"
            />
          </span>
          <div className="leading-[1.9rem]">
            <p className="text-xs mb-[-0.35rem] text-[#d8d3d3]">Delivered to</p>
            <span className="font-bold text-[1rem]">United Ethiopia</span>
          </div>
        </div>

        <div className="flex items-center w-[50%] ml-[-15rem] mr-[-5rem] active:outline-[#FF9900] ">
          {/* search */}

          <select className="text-black bg-[#D4D4D4] py-[0.45rem] pl-[0.7rem] pr-[0.1rem] mr-[-0.1rem] text-lg rounded-l-md max-w-14 cursor-pointer ">
            <option value="" defaultValue="All">
              All
            </option>
            <option value="">All in all</option>
          </select>

          <input
            type="text"
            name=""
            id=""
            placeholder="search product"
            className="p-2 w-full text-black focus:outline-[#FF9900]"
          />
          {/* icon */}
          <IoSearchOutline className=" bg-[#F3A847] hover:bg-[#ca872f] w-[4rem] h-[2.5rem] rounded-r-md" />
        </div>

        {/* right side sections */}
        <div className="flex justify-between w-[23%] ml-[-2rem] mr-[-3rem] px-5 my-3">
          <div className="flex gap-1 items-center mt-2 h-[33px] ml-[-45px] mr-[2.5rem]  ">
            <img
              src={imagesData.USA_flag}
              alt="usa flag"
              width={20}
              height={20}
              className="object-contain"
            />
            <select name="" id="" className="text-md bg-black">
              <option value="">EN</option>
            </select>
          </div>

          {/* the 3 right edge items */}

          <Link to="/auth" className="leading-3 mt-2 pr-[2.5rem]">
            <p className="text-sm px-2 mx-2 ">Sign In</p>
            <span className="text-md font-bold mx-[-10px] text-nowrap ">
              Account & Lists
            </span>
          </Link>
          {/* orders */}
          <Link to="/orders" className="mr-[23px] mt-2 px-2 leading-[0.9]">
            <p className="text-sm pl-2">Returns</p>
            <span className="text-md font-bold mx-2">&Orders</span>
          </Link>
          {/* cart */}
          <Link to="/cart" className="mr-[-17px]">
            <span className="bg-yellow-600 text-white px-1 rounded-sm text-bold">
              {cart.length}
            </span>
          </Link>
        </div>
      </section>
    </header>
  );
};

export default Header;
