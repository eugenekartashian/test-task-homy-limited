import { Card } from '../ui/card';
import { TableInput } from './TableInput';
import { TableStats } from './TableStats';
import { TableList } from './TableList';
import '../../globals.css';
import { useTranslation } from 'react-i18next';
import LangToggler from './LangToggler';
import { useNumb } from './useNumb';

/* Главный компонент Table, разбил его 
и вынес добавление/удаление/хранение в локал сторадж 
в кастомный хук useNumb */
export const Table = () => {
  /* получаю из кастомного хука методы работы с числами */
  const { numbers, addNumber, removeNumber } = useNumb();
  /* инициализация мультиязычности, которую я решил добавить на свое усмотрение */
  const { i18n } = useTranslation();
  /* функция смены языка с проверкой, чтобы TS не ругался */
  const switchLanguage = (lang: string) => {
    if (lang === 'en' || lang === 'ua' || lang === 'ru') {
      i18n.changeLanguage(lang);
    }
  };

  return (
    <Card className="w-full max-w-lg p-6 space-y-6 shadow-lg bg-blue-100">
      {/* компонент тоглер языков */}
      <LangToggler switchLanguage={switchLanguage} />

      {/* компонент инпута */}
      <TableInput onAdd={addNumber} />

      {/* компонент статистики */}
      <TableStats numbers={numbers} />

      {/* компонент списка таблицы где можно удалить число */}
      <TableList numbers={numbers} onRemove={removeNumber} />
    </Card>
  );
};
