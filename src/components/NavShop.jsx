import { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

function NavShop() {
  const [active, setActive] = useState(0);
  const buttonAll = useRef(null);

  const styleProducts = useSpring({
    width: active === 0 ? buttonAll.width : 0,
  });
  const styleWonmen = useSpring({
    width: active === 1 ? 64 : 0,
  });

  return (
    <div className="text-[#888] flex gap-x-8">
      <div className="">
        <button onClick={() => setActive(0)} ref={buttonAll}>
          All product
        </button>
        <animated.p
          className="border-[#797979] border-b"
          style={styleProducts}
        />
      </div>
      <div>
        <button onClick={() => setActive(1)} className="hover:text-[#333]">
          Wonmen
        </button>
        <animated.p className="border-[#797979] border-b" style={styleWonmen} />
      </div>
      <button className="hover:text-[#333] hover:border-[#797979] hover:border-b">
        Men
      </button>
      <button className="hover:text-[#333] hover:border-[#797979] hover:border-b">
        Bag
      </button>
      <button className="hover:text-[#333] hover:border-[#797979] hover:border-b">
        Shoes
      </button>
      <button className="hover:text-[#333] hover:border-[#797979] hover:border-b">
        Watches
      </button>
    </div>
  );
}

export default NavShop;
