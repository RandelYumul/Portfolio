interface ObjectiveListProps {
  children: React.ReactNode;
}

export const ObjectiveList = ({ children }: ObjectiveListProps) => {
  return (
    <div className="w-full flex flex-col gap-12 sm:gap-16">
      {children}
    </div>
  );
};