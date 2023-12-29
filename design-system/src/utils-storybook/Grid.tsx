interface GridProps {
  children: React.ReactNode;
}

export const Grid = ({ children }: GridProps) => (
  <div className="grid grid-cols-[max-content_1fr] gap-4 items-center">
    {children}
  </div>
);
