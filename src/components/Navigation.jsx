import { useSpring, animated } from 'react-spring';
import { BsChevronRight } from 'react-icons/bs';
import { useState, useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import Topbar from './Topbar';

function Navigation() {
  const [isNavHome, setNavHome] = useState(false);
  const navHome = useSpring({
    height: isNavHome ? 120 : 0,
  });
  const navHomeIcon = useSpring({
    rotate: isNavHome ? 90 : 0,
  });
  const { lang } = useContext(LanguageContext);
  const text = lang.navigation;
  return (
    <div>
      <Topbar />
      <ul>
        <li className="flex justify-between items-center">
          <a className="inline-block py-2 px-5" href="/#">
            {text.home}
          </a>
          <animated.div className="mr-2" style={navHomeIcon}>
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
        <li>
          <a className="inline-block py-2 px-5" href="/#">
            {text.shop}
          </a>
        </li>
        <li>
          <a className="inline-block py-2 px-5" href="/#">
            {text.features}
          </a>
        </li>
        <li>
          <a className="inline-block py-2 px-5" href="/#">
            {text.blog}
          </a>
        </li>
        <li>
          <a className="inline-block py-2 px-5" href="/#">
            {text.about}
          </a>
        </li>
        <li>
          <a className="inline-block py-2 px-5" href="/#">
            {text.contact}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
