import React from 'react';
import type { LangTogglerProps } from './types';

/* компонент переключения языка i18n, решил добавить мультиязычность на свое усмотрение */
const LangToggler: React.FC<LangTogglerProps> = ({ switchLanguage }) => {
  return (
    <div className="flex justify-center gap-4">
      <button
        className="text-3xl cursor-pointer"
        onClick={() => switchLanguage('en')}
      >
        🇬🇧
      </button>
      <button
        className="text-3xl cursor-pointer"
        onClick={() => switchLanguage('ua')}
      >
        🇺🇦
      </button>
      <button
        className="text-3xl cursor-pointer"
        onClick={() => switchLanguage('ru')}
      >
        🇷🇺
      </button>
    </div>
  );
};

export default LangToggler;
