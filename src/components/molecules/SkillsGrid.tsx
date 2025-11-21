interface SkillsGridProps {
  children: React.ReactNode;
}

export const SkillsGrid = ({ children }: SkillsGridProps) => {
  return <div className="grid grid-cols-1 lg:grid-cols-3 h-auto gap-6">{children}</div>;
};
