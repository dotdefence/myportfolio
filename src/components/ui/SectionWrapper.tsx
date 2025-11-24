import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, children, className }: SectionWrapperProps) {
  return (
    <section 
      id={id}
      className={cn("relative overflow-hidden", className)}
    >
      {children}
    </section>
  );
}