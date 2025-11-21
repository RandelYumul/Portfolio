interface SubHeadingAtomProps {
  children: React.ReactNode;
  className?: string;
}

export const SubHeadingAtom = ({ children, className }: SubHeadingAtomProps) => {
  return <h2 className={className}>{children}</h2>;
};
