interface ObjectiveListProps {
  children: React.ReactNode;
}

export const ObjectiveList = ({ children }: ObjectiveListProps) => {
  return (
    <div className="w-full flex flex-col gap-12 sm:gap-16 w-full px-2 sm:px-4 md:px-0">
      {children}
    </div>
  );
};