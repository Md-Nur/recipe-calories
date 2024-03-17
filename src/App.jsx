import { useEffect, useState } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { toast } from "react-toastify";
import Blog from "./components/Blog/Blog";
import Cooking from "./components/Cooking/Cooking";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [wantToCook, setWantToCook] = useState([]);
  const [cooking, setCooking] = useState([]);

  useEffect(() => {
    fetch("./public/data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((e) => toast.error(e));
  }, []);

  const preparing = (cook) => {
    setWantToCook(
      [...wantToCook].filter((wcook) => wcook.recipe_id != cook.recipe_id)
    );
    setCooking([...cooking, cook]);
  };
  const handleWantToCook = (blog) => {
    if (wantToCook.find((wcook) => wcook.recipe_id === blog.recipe_id)) {
      toast("Already exist");
    } else {
      setWantToCook([...wantToCook, blog]);
    }
  };

  return (
    <>
      <Navbar />
      <Hero />
      <section className="m-3 md:m-7">
        <h2 className="text-2xl md:text-4xl text-center font-bold">
          Our Recipes
        </h2>
        <p className="max-w-3xl mx-auto text-center text-sm text-gray-700">
          You can learn cooking from our website. It is very easy to learn from
          our website. We are also very easy to learn about the different ways
          you can create your own cookbook and cook book files.
        </p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-5 w-full">
        <div className="flex flex-wrap justify-between md:col-span-3 p-3">
          {blogs.map((blog, index) => (
            <Blog blog={blog} key={index} handleWantToCook={handleWantToCook} />
          ))}
        </div>
        <div className="md:col-span-2">
          <h2 className="font-bold text-center m-3">
            Want to cook: {wantToCook.length}
          </h2>
          <hr />
          <Cooking cooks={wantToCook} preparing={preparing} />

          <h2 className="font-bold text-center m-3">
            Currently cooking: {cooking.length}
          </h2>
          <hr />
          <Cooking cooks={cooking} />
        </div>
      </section>
    </>
  );
}

export default App;
