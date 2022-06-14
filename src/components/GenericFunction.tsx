import { ReactNode, useState } from 'react';

type renderItemType<S> = (items: S) => ReactNode;
const GenericFunction = <T,>({
  items,
  renderItems,
}: {
  items: T[];
  renderItems?: renderItemType<T[]>;
}) => {
  const [state, setState] = useState<number | null>(null);
  setState(123);

  return (
    <div>
      {renderItems?.(items)}
      {state}
    </div>
  );
};

export default GenericFunction;
