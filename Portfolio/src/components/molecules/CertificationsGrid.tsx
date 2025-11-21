interface CertificationsGridProps {
  children: React.ReactNode;
}

export const CertificationsGrid = ({ children }: CertificationsGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-6 gap-x-6 w-full">
      {children}
    </div>
  );
};
