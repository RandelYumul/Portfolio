interface SkillsGridProps {
  children: React.ReactNode;
}

export const SkillsGrid = ({ children }: SkillsGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6">
      {children}
    </div>
  );
};