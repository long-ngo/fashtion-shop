function Banner({ image, text, desc }) {
  return (
    <div className="relative border-gray-300 border overflow-hidden w-full h-full">
      <img src={image} alt={text} />
      <a
        className="absolute top-0 left-0 border-gray-300 block p-5 w-full h-full"
        href="/#"
      >
        <div>
          <h2 className="text-2xl font-semibold text-[#333]">{text}</h2>
          <p className="text-sm text-[#555] mt-2">{desc}</p>
        </div>
      </a>
    </div>
  );
}

export default Banner;
