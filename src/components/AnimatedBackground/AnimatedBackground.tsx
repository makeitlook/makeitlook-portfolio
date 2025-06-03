export const AnimatedBackground = ({ className = "" }) => (
  <div className={`overflow-hidden pointer-events-none ${className}`}>
    <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-elements-primary-dimmed/30 to-elements-secondary-dimmed/30 blur-3xl transform rotate-12 animate-pulse" />
    <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-elements-primary-main/80 to-elements-secondary-highlight/30 blur-3xl transform -rotate-40 animate-pulse" />
  </div>
);
