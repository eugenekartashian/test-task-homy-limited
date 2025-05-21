import { useState, useEffect } from 'react';

/* Захотел, чтобы после F5 ничего не удалялось, а хранилось в локалсторадж, 
поэтому логичнее было вынести в отдельный кастомный хук */
export const useNumb = () => {
  const [numbers, setNumbers] = useState<number[]>(() => {
    try {
      /* получаю данные из локал сторадж */
      const saved = localStorage.getItem('numbers');
      /* если есть данные, то парсим их, если нет, то возврат пустого массива */
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  /* обернул в useEffect с зависимостью от изменения numbers, чтобы сохранялось автоматически */
  useEffect(() => {
    localStorage.setItem('numbers', JSON.stringify(numbers));
  }, [numbers]);

  /* добавление числа в массив */
  const addNumber = (num: number) => setNumbers((prev) => [...prev, num]);
  /* удаления числа по index */
  const removeNumber = (index: number) =>
    setNumbers((prev) => prev.filter((_, i) => i !== index));

  /* возвращаю чтобы было можно работать с хуком  */
  return { numbers, addNumber, removeNumber };
};
