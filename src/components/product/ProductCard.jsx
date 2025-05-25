import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat";
import { Link } from "react-router-dom";

const ProductCard = ({ data, _flex, addDesc }) => {
  const { id, title, image, price, rating, description } = data;

  return (
    <div
      className={`group
      ${
        _flex
          ? "absolute flex gap-[20px] h-[50vh] px-[3%] top-[22vh]  "
          : "p-3 shadow-md shadow-[#47444437] rounded-sm transform hover:scale-95 transition duration-300 px-5"
      } 
      
`}
    >
      <Link to={`/products/${id}`}>
        <img
          src={image}
          alt={id}
          className={`relative w-full object-contain ${
            _flex ? "h-full my-[7%] w-[80%]" : "h-[200px] p-3"
          }   `}
        />
      </Link>

      <div
        className={`w-full h-auto ${
          _flex ? " w-[80%] my-[3%] text-xl flex gap-3 flex-col" : ""
        } `}
      >
        <h3 className={`${_flex ? "text-2xl mx-auto font-bold" : ""}`}>
          {title}
        </h3>

        {/* description */}
        {addDesc && <p className="text-lg">{description}</p>}

        <div className={`${_flex ? "text-2xl mx-[30%] font-bold" : ""}`}>
          {/* rating  */}
          <Rating value={rating?.rate} precision={0.1} />

          {/* rating counter */}
          <small>{rating?.count}</small>
        </div>

        <div className={`${_flex ? "text-2xl mx-[30%] font-bold" : ""}`}>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        <button
          className={`rounded-sm px-5 mb-3 bg-[#e182347d] font-bold cursor-pointer  py-1 ${
            _flex
              ? "block mx-[30%] min-w-[20%] mt-[2%] transform hover:scale-110 transition-all duration-300"
              : " hidden group-hover:block w-[50%] absolute left-[25%] bottom-0"
          } `}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
