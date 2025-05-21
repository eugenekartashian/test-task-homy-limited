import type { StatItemProps } from './types';

/* можно вынести при желании в ui элементы, но оставил в той же папке для удобства понимания*/
export const StatItem = ({ label, value }: StatItemProps) => (
  <div>
    <p className="text-sm">{label}</p>
    <p className="font-medium">{value}</p>
  </div>
);
