import Footer from "./Footerx";
import Header from "./Navx";
import Widget from "./Widget";

const Pricing = () => {
  return (
    <div className="bg-slate-800">
      <Header />
      <section className=" text-center text-white py-20 md:mx-64 ">
        <h1 className="text-4xl font-fira">Our Plans</h1>
        <p className="pt-4 text-sm px-2">
          Our aim is to reduce our negative social, economic and environmental
          footprints while enhancing the overall value we create as a leading
          brand
        </p>
      </section>
      <section className="bg-gray-50 w-full h-5"></section>
      <Footer/>
    </div>
  );
}

export default Pricing;