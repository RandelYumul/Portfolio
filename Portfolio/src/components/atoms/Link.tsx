interface LinkAtomProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const LinkAtom = ({ href, children, className }: LinkAtomProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
};
