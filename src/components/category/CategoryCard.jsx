import { Link } from "react-router-dom";

const CategoryCard = ({ data }) => {
  return (
    <div className="relative p-2 bg-white h-[25rem] rounded-[5px] cursor-pointer">
      <Link to={`/category/${data.category}`} className="flex flex-col">
        <span>{data.category}</span>
        <img
          src={data.img_url}
          alt={data.title}
          className="w-[18rem] object-contain"
        />
        <p>Show now</p>
      </Link>
    </div>
  );
};

export default CategoryCard;
