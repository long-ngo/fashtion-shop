import { useSpring, animated } from 'react-spring';
import { BsChevronRight } from 'react-icons/bs';
import { useState, useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

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
  const { lang } = useContext(LanguageContext);
  const text = lang.navigation;
  return (
    <animated.ul
      className="bg-[#717fe0] text-white overflow-y-auto"
      style={nav}
    >
      <li className="flex justify-between items-center h-10 px-4 capitalize">
        <a href="/#">{text.home}</a>
        <animated.div style={navHomeIcon}>
          <BsChevronRight size={12} onClick={() => setNavHome(!isNavHome)} />
        </animated.div>
      </li>
      <animated.li className="h-0 overflow-hidden" style={navHome}>
        <ul className="px-6 bg-white text-black">
          <li className="flex justify-between items-center h-10 capitalize">
            <a href="/#">{text.home1}</a>
          </li>
          <li className="flex justify-between items-center h-10 capitalize">
            <a href="/#">{text.home2}</a>
          </li>
          <li className="flex justify-between items-center h-10 capitalize">
            <a href="/#">{text.home3}</a>
          </li>
        </ul>
      </animated.li>
      <li className="flex justify-between items-center h-10 px-4 capitalize">
        <a href="/#">{text.shop}</a>
      </li>
      <li className="flex justify-between items-center h-10 px-4 capitalize">
        <a href="/#">{text.features}</a>
      </li>
      <li className="flex justify-between items-center h-10 px-4 capitalize">
        <a href="/#">{text.blog}</a>
      </li>
      <li className="flex justify-between items-center h-10 px-4 capitalize">
        <a href="/#">{text.about}</a>
      </li>
      <li className="flex justify-between items-center h-10 px-4 capitalize">
        <a href="/#">{text.contact}</a>
      </li>
    </animated.ul>
  );
}

export default Navigation;
