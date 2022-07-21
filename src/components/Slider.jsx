function Slider() {
  return (
    <div
      style={{
        backgroundImage: `url("https://preview.colorlib.com/theme/cozastore/images/xslide-03.jpg.pagespeed.ic.tP-L47NU9M.webp")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}
      className="h-96 flex items-center"
    >
      {/* <img src="https://preview.colorlib.com/theme/cozastore/images/xslide-03.jpg.pagespeed.ic.tP-L47NU9M.webp" /> */}
      {/* https://preview.colorlib.com/theme/cozastore/images/xslide-02.jpg.pagespeed.ic.__MQeyG5T4.webp 
      https://preview.colorlib.com/theme/cozastore/images/xslide-01.jpg.pagespeed.ic.XotvXKn0Mi.webp
      */}
      <div className="ml-4">
        <p className="capitalize">men collection</p>
        <h1 className="uppercase my-2">new arrivals</h1>
        <button className="uppercase bg-blue-400 text-white px-4 py-2 rounded-3xl">
          shop now
        </button>
      </div>
    </div>
  );
}

export default Slider;
