type PlaceholderImageProps = {
  gradient: string;
  className?: string;
  children?: React.ReactNode;
};

export default function PlaceholderImage({
  gradient,
  className = "",
  children,
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: gradient }}
    >
      {children}
    </div>
  );
}
