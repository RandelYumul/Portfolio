interface AboutGridProps {
  children: React.ReactNode;
}

export const AboutGrid = ({ children }: AboutGridProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
      {children}
    </div>
  );
};
