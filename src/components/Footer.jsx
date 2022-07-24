import { useContext, useState } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { useSpring, animated } from 'react-spring';

function Footer() {
  const { lang } = useContext(LanguageContext);
  const text = lang.footer;
  const [isEmail, setIsEmail] = useState(false);
  const styleFocus = useSpring({
    width: isEmail ? 2000 : 0,
  });
  return (
    <div className="bg-[#222] text-white mt-10 py-8 flex flex-col gap-y-8">
      <div className="flex flex-col px-4 gap-y-4">
        <p className="uppercase font-bold text-base">{text.categories}</p>
        <a className="capitalize text-[#b2b2b2] text-sm" href="/#">
          {text.wonmen}
        </a>
        <a className="capitalize text-[#b2b2b2] text-sm" href="/#">
          {text.men}
        </a>
        <a className="capitalize text-[#b2b2b2] text-sm" href="/#">
          {text.shoes}
        </a>
        <a className="capitalize text-[#b2b2b2] text-sm" href="/#">
          {text.watches}
        </a>
      </div>
      <div className="flex flex-col px-4 gap-y-4">
        <p className="uppercase font-bold text-base">{text.help}</p>
        <a className="capitalize text-[#b2b2b2] text-sm" href="/#">
          {text.order}
        </a>
        <a className="capitalize text-[#b2b2b2] text-sm" href="/#">
          {text.returns}
        </a>
        <a className="capitalize text-[#b2b2b2] text-sm" href="/#">
          {text.shipping}
        </a>
        <a className="capitalize text-[#b2b2b2] text-sm" href="/#">
          {text.faq}
        </a>
      </div>
      <div className="flex flex-col px-4 gap-y-4">
        <p className="uppercase font-bold text-base">{text.touch}</p>
        <p className="capitalize text-[#b2b2b2] text-sm" href="/#">
          {text.address}
        </p>
      </div>
      <div className="flex flex-col px-4 gap-y-4">
        <p className="uppercase font-bold text-base">{text.newsletter}</p>
        <div className="border-b border-[#cccccc1a]">
          <input
            className="text-[#b2b2b2] bg-transparent outline-none"
            type="text"
            name="email"
            placeholder={text.email}
            onFocus={() => setIsEmail(true)}
            onBlur={() => setIsEmail(false)}
          />
          <animated.p
            className="h-0.5 max-w-full bg-[#6774d5] overflow-hidden"
            style={styleFocus}
          ></animated.p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
