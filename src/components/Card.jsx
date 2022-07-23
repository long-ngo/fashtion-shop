function Card({ src, name, price }) {
  return (
    <div className="">
      <div className="">
        <img
          className="w-full h-full object-cover object-center"
          src={src}
          alt={name}
        />
      </div>
      <div className="h-[10%]">
        <div className="mt-2">
          <a className="text-[#999] text-sm">{name}</a>
        </div>
        <p className="text-[#666] text-sm mt-1">${price}</p>
      </div>
    </div>
  );
}

export default Card;
