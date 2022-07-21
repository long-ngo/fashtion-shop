import { useSpring, animated } from 'react-spring';
import { BsChevronRight } from 'react-icons/bs';
import { useState } from 'react';
function Navigation({ flip = false }) {
  const [isNavHome, setNavHome] = useState(false);
  const nav = useSpring({
    height: flip ? 240 : 0,
  });
  const navHome = useSpring({
    height: isNavHome ? 120 : 0,
  });
  const navHomeIcon = useSpring({
    rotate: isNavHome ? 90 : 0,
  });

  return (
    <animated.ul
      className="bg-[#717fe0] text-white overflow-y-auto"
      style={nav}
    >
      <li className="flex justify-between items-center h-10 px-4">
        <a href="/#">Home</a>
        <animated.div style={navHomeIcon}>
          <BsChevronRight size={12} onClick={() => setNavHome(!isNavHome)} />
        </animated.div>
      </li>
      <animated.li className="h-0 overflow-hidden" style={navHome}>
        <ul className="px-6 bg-white text-black">
          <li className="flex justify-between items-center h-10">
            <a href="/#">Home 1</a>
          </li>
          <li className="flex justify-between items-center h-10">
            <a href="/#">Home 2</a>
          </li>
          <li className="flex justify-between items-center h-10">
            <a href="/#">Home 3</a>
          </li>
        </ul>
      </animated.li>
      <li className="flex justify-between items-center h-10 px-4">
        <a href="/#">Shop</a>
      </li>
      <li className="flex justify-between items-center h-10 px-4">
        <a href="/#">Features</a>
      </li>
      <li className="flex justify-between items-center h-10 px-4">
        <a href="/#">Blog</a>
      </li>
      <li className="flex justify-between items-center h-10 px-4">
        <a href="/#">About</a>
      </li>
      <li className="flex justify-between items-center h-10 px-4">
        <a href="/#">Contact</a>
      </li>
    </animated.ul>
  );
}

export default Navigation;
