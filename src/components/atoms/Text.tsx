interface TextAtomProps {
  children: React.ReactNode;
  className?: string;
}

export const TextAtom = ({ children, className }: TextAtomProps) => {
  return <p className={className}>{children}</p>;
};
