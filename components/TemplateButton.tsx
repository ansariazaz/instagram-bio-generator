import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface TemplateButtonProps {
  icon: LucideIcon;
  label: string;
  isSelected?: boolean;
  onClick: () => void;
}

export const TemplateButton = ({
  icon: Icon,
  label,
  isSelected,
  onClick,
}: TemplateButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all duration-200",
        "hover:border-primary hover:bg-primary/5",
        isSelected
          ? "border-primary bg-primary/10"
          : "border-gray-200 bg-white"
      )}
    >
      <Icon className="w-6 h-6 mb-2" />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
};