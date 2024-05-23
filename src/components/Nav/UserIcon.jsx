import { Link } from "react-router-dom";
import { TbTrademark } from "react-icons/tb";
const Icon = () => {
  return (
    <>
      <Link
        to="/"
        className="rounded-md w-40 bg-black pointer py-2 relative px flex justify-center text-white updpercase m-3 font-bold items-center text-[18px]"
      >
        Proquo
        <span className="text-sm ml- rounded bg-[#fc5b3f] px-1 font-extrabold font-mono text-black">
          auctions
        </span>
        <span
          className="text-white bdg-white absolute right-0 left-36 pt-1 top-0.5"
          style={{ fodntSize: "3px" }}
        >
          <TbTrademark />
        </span>
      </Link>
    </>
  );
};

export default Icon;
