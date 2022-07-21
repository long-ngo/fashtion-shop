import { FaSistrix } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Navigation from '../components/Navigation';

function Header() {
  const [isNav, setNav] = useState(false);
  const barsTopLine = useSpring({
    translateY: isNav ? 7 : 0,
    rotate: isNav ? 45 : 0,
  });
  const barsCenterLine = useSpring({
    display: isNav ? 'none' : 'block',
  });
  const barsBottomLine = useSpring({
    translateY: isNav ? -7 : 0,
    rotate: isNav ? -45 : 0,
  });
  return (
    <div>
      <div className="flex justify-between items-center px-4 h-16">
        <div>
          <p className="text-2xl uppercase">
            <span className="font-bold">COZA</span> STORE
          </p>
        </div>
        <div className="flex justify-center items-center gap-x-4">
          <FaSistrix size={28} />
          <AiOutlineShoppingCart size={28} />

          <div
            className="h-4 flex flex-col justify-between"
            onClick={() => setNav(!isNav)}
          >
            <animated.p
              className="w-6 border-t-2 border-black"
              style={barsTopLine}
            ></animated.p>
            <animated.p
              className="border-t-2 border-black"
              style={barsCenterLine}
            ></animated.p>
            <animated.p
              className="w-6 border-t-2 border-black"
              style={barsBottomLine}
            ></animated.p>
          </div>
        </div>
      </div>
      <Navigation flip={isNav} />
    </div>
  );
}

export default Header;
