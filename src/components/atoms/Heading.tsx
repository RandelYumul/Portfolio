interface HeadingAtomProps {
  children: React.ReactNode;
  className?: string;
}

export const HeadingAtom = ({ children, className }: HeadingAtomProps) => {
  return <h1 className={className}>{children}</h1>;
};
