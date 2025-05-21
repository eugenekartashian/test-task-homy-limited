import { t } from 'i18next';
import { Button } from '../../ui/button';
import type { TableListProps } from './types';

/* компонент отображения введенных чисел и с возможностью их удаления  */
export const TableList = ({ numbers, onRemove }: TableListProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-center">{t('list')}</h2>

      {/* тернарка чтобыы рендерило список или сообщение о том, что нет чисел введенных еще */}
      {numbers.length > 0 ? (
        <ul className="space-y-2">
          {numbers.map((num, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-3 border rounded-lg"
            >
              {/* отображение числа */}
              <span className="font-medium">{num}</span>
              {/* кнопка удаления */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => onRemove(index)}
                className="bg-red-500 border-2 border-black cursor-pointer"
              >
                {t('remove')}
              </Button>
            </li>
          ))}
        </ul>
      ) : (
        /* сообщение, что нет числа еще введенного */
        <p className="text-center">{t('result')}</p>
      )}
    </div>
  );
};
