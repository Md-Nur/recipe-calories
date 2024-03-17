import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="m-3 md:m-7">
        <h2 className="text-2xl md:text-4xl text-center">Our Recipes</h2>
        <p className="max-w-3xl mx-auto text-center text-sm text-gray-700">
          You can learn cooking from our website. It is very easy to learn from
          our website. We are also very easy to learn about the different ways you can create your own cookbook and cook book files.
        </p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-5">
        <div className="md:col-span-3">

        </div>
        <div className="md:col-span-2">

        </div>
      </section>
    </>
  );
}

export default App;
