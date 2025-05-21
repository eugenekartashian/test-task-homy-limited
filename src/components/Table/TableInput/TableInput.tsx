import { useState, type KeyboardEvent } from 'react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { t } from 'i18next';
import type { TableInputProps } from './types';

export const TableInput = ({ onAdd }: TableInputProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    const num = parseFloat(inputValue);
    if (isNaN(num)) {
      alert(t('error'));
      return;
    }

    onAdd(num);
    setInputValue('');
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') handleAdd();
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="number-input">{t('label')}</Label>
      <div className="flex gap-2">
        <Input
          className=" border-2"
          id="number-input"
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t('placeholder')}
        />
        <Button
          onClick={handleAdd}
          className="border-2 bg-green-500 cursor-pointer"
        >
          {t('add')}
        </Button>
      </div>
    </div>
  );
};
