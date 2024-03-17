import { IoMdTime } from "react-icons/io";
import { FaGripfire } from "react-icons/fa";

const Blog = ({ blog, handleWantToCook }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl m-3">
      <figure className="px-5 pt-5 w-full">
        <img
          src={blog.recipe_image}
          alt={blog.recipe_name}
          className="rounded-xl w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{blog.recipe_name}</h2>
        <p className="text-sm text-gray-500">{blog.short_description}</p>
        <hr />
        <h3 className="card-title font-bold">
          Ingredients: {blog.ingredients.length}
        </h3>
        <ul className="text-sm text-gray-500">
          {blog.ingredients.map((ingredient, index) => {
            return (
              <li key={index} className="list-disc">
                {ingredient}
              </li>
            );
          })}
        </ul>
        <hr />
        <div className="flex items-center gap-3 text-sm text-gray-700">
          <div className="flex justify-center items-center gap-1">
            <IoMdTime />
            {blog.preparing_time} minutes
          </div>
          <div className="flex justify-center items-center gap-1">
            <FaGripfire />
            {blog.calories}
          </div>
        </div>
        <div className="card-actions">
          <button
            onClick={() => handleWantToCook(blog)}
            className="btn btn-success rounded-3xl"
          >
            Want to cook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
