import { t } from 'i18next';
import { Card } from '../../ui/card';
import type { TableStatsProps } from './types';
import { StatItem } from './StatItem';

/* основная логика компонента вычислять данные и отображать статистику:
количество введенных чисел, среднее значение, минимальное и максимальное */
export const TableStats = ({ numbers }: TableStatsProps) => {
  /* вычисление  данных */
  const count = numbers.length; //
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = count > 0 ? sum / count : 0;
  const min = count > 0 ? Math.min(...numbers) : '-';
  const max = count > 0 ? Math.max(...numbers) : '-';

  return (
    /* возвращаю UI с карточкой статистики */
    <Card className="p-4 space-y-2">
      <h2 className="text-xl font-semibold text-center">{t('stats')}</h2>
      <div className="flex flex-col justify-center mx-auto space-y-4">
        <StatItem label={t('qty')} value={count} />
        <StatItem label={t('average')} value={average.toFixed(2)} />
        <StatItem label={t('min')} value={min} />
        <StatItem label={t('max')} value={max} />
      </div>
    </Card>
  );
};
