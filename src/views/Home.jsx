import Header from '../components/Header';
import Slider from '../components/Slider';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Footer from '../components/Footer';
import { banners } from '../data/banners';
import { products } from '../data/products';

function Home() {
  return (
    <div className="overflow-x-hidden overflow-y-auto">
      <Header />
      <Slider />
      <div className="flex justify-center items-center my-8">
        <div className="w-11/12 flex flex-col gap-4">
          {banners.map((item) => (
            <Banner
              key={item.id}
              text={item.text}
              desc={item.desc}
              image={item.src}
            />
          ))}
        </div>
      </div>
      <div className="px-4">
        <h3 className="text-[#222] text-3xl font-bold uppercase my-4">
          product overview
        </h3>
        <div className="flex flex-col gap-y-4">
          {products.map((item) => (
            <Card
              key={item.id}
              src={item.src}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
