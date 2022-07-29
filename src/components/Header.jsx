import { useContext } from 'react';
import { FaSistrix } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { HiOutlineMoon } from 'react-icons/hi';
import { BsSun } from 'react-icons/bs';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Navigation from '../components/Navigation';
import { useDarkMode } from '../hooks/useDarkMode';

import { LanguageContext } from '../context/LanguageContext';

function Header() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
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

  const nav = useSpring({
    height: isNav ? 280 : 0,
  });

  const { lang } = useContext(LanguageContext);
  const text = lang.header;

  return (
    <div className="dark:bg-[#1a1816d9] dark:text-white">
      <div className="flex justify-between items-center px-4 h-16">
        <div>
          <p className="text-2xl uppercase">
            <span className="font-bold">{text.title}</span>
          </p>
        </div>
        <div className="flex justify-center items-center gap-x-4">
          {isDarkMode ? (
            <BsSun size={24} onClick={toggleDarkMode} />
          ) : (
            <HiOutlineMoon size={24} onClick={toggleDarkMode} />
          )}

          <FaSistrix size={24} />
          <AiOutlineShoppingCart size={24} />
          <div
            className="h-4 flex flex-col justify-between"
            onClick={() => setNav(!isNav)}
          >
            <animated.p
              className="w-6 border-t-2 border-black dark:border-white"
              style={barsTopLine}
            ></animated.p>
            <animated.p
              className="border-t-2 border-black dark:border-white"
              style={barsCenterLine}
            ></animated.p>
            <animated.p
              className="w-6 border-t-2 border-black dark:border-white"
              style={barsBottomLine}
            ></animated.p>
          </div>
        </div>
      </div>
      <animated.div
        className="bg-[#717fe0] text-white overflow-y-auto text-sm"
        style={nav}
      >
        <Navigation />
      </animated.div>
    </div>
  );
}

export default Header;
