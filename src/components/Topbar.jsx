import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

function Topbar() {
  const { changeLanguage, lang } = useContext(LanguageContext);
  const text = lang.topbar;
  return (
    <div className="bg-[#222] text-[#b2b2b2] text-xs">
      <p className="py-2 px-4 border-b border-[#ffffff0d]">{text.title}</p>
      <div className="flex py-2 px-4">
        <a
          className="px-2.5 border-l border-[#ffffff4d] hover:text-[#6c7ae0]"
          href="/#"
        >
          {text.help}
        </a>
        <a
          className="px-2.5 border-l border-[#ffffff4d]  hover:text-[#6c7ae0]"
          href="/#"
        >
          {text.account}
        </a>
        <a
          className="px-2.5 border-l border-[#ffffff4d]  hover:text-[#6c7ae0]"
          href="/#"
          onClick={() => changeLanguage('en')}
        >
          EN
        </a>
        <a
          className="px-2.5 border-x border-[#ffffff4d]  hover:text-[#6c7ae0]"
          href="/#"
          onClick={() => changeLanguage('vi')}
        >
          VI
        </a>
      </div>
    </div>
  );
}

export default Topbar;
