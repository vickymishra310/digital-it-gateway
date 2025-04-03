
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeader({ 
  title, 
  subtitle, 
  center = false,
  className
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "space-y-2 mb-10",
      center && "text-center",
      className
    )}>
      <h2 className="font-bold text-3xl md:text-4xl">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
