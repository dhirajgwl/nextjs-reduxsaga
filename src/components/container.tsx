import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  cssName?: string;
};

const Container = ({ children, cssName }: Props) => {
  return <div className={`container ${cssName}`}>{children}</div>;
};

export default Container;
