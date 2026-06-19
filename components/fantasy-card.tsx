export function FantasyCard({
  children,
  className = ''
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`clip-fantasy gold-border bg-ember/80 p-5 shadow-glow backdrop-blur-sm ${className}`}>
      {children}
    </div>
  );
}
