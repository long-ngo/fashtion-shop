import { useContext, useState } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { useSpring, animated } from 'react-spring';
import Button from './Button';

function Footer() {
  const [isEmail, setIsEmail] = useState(false);
  const { lang } = useContext(LanguageContext);
  const text = lang.footer;
  const styleFocus = useSpring({
    width: isEmail ? window.innerWidth : 0,
  });

  return (
    <div className="bg-[#222] text-white mt-10 py-8">
      <div className="flex flex-col gap-y-8">
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
          <Button text="subscribe" />
        </div>
      </div>
      <div className="mt-12 mx-4">
        <div className="flex justify-center gap-x-0.5">
          <a href="/#">
            <img
              src="https://preview.colorlib.com/theme/cozastore/images/icons/xicon-pay-01.png.pagespeed.ic.x3ksseq-Ro.webp"
              alt="paypal"
            ></img>
          </a>
          <a href="/#">
            <img
              src="https://preview.colorlib.com/theme/cozastore/images/icons/xicon-pay-02.png.pagespeed.ic.VV76jih-LZ.webp"
              alt="visa"
            />
          </a>
          <a href="/#">
            <img
              src="https://preview.colorlib.com/theme/cozastore/images/icons/xicon-pay-03.png.pagespeed.ic.qm10pI94h8.webp"
              alt="pay03"
            />
          </a>
          <a href="/#">
            <img
              src="https://preview.colorlib.com/theme/cozastore/images/icons/xicon-pay-04.png.pagespeed.ic.afX_pRP1xW.webp"
              alt="pay04"
            />
          </a>
          <a href="/#">
            <img
              src="https://preview.colorlib.com/theme/cozastore/images/icons/xicon-pay-05.png.pagespeed.ic.j9rtlz4R-L.webp"
              alt="pay05"
            />
          </a>
        </div>
        <p className="mt-4 text-[#888] text-sm text-center">
          Copyright ©2022 All rights reserved | This template is made with by{' '}
          <a className="text-[#007bff]" href="/#">
            Colorlib
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
