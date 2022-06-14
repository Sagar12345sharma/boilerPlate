import { ReactElement, ReactNode, useState } from 'react';

// import { Log } from '../utils';

const Heading = ({
  title = 0,
  children,
  title2 = 'default prop',
}: {
  title?: number;
  children?: ReactNode;
  title2?: string | number;
}): ReactElement | null => {
  const [state, setState] = useState<number>(title);
  const incrementState = () => {
    setState((s: number) => s + 1);
  };
  // Log({ state });
  return (
    <div>
      {state}
      <div>{children}</div>
      {title2}
      <button onClick={incrementState}>incrememt</button>
    </div>
  );
};

export default Heading;
