interface ListAtomProps {
  items: string[];
  className?: string;
}

export const ListAtom = ({ items, className }: ListAtomProps) => {
  return (
    <ul className={`list-disc pl-5 space-y-1 ${className}`}>
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
};
