import { icons } from "lucide-react-native";

type IconName = keyof typeof icons;

export type IconProps = {
  name: IconName;
  color: string;
  size: number;
};

/**
 * Icon component
 * @param name - The name of the icon
 * @param color - The color of the icon
 * @param size - The size of the icon
 * @returns The icon component
 */
const Icon = ({ name, color, size }: IconProps) => {
  const LucideIcon = icons[name];

  return <LucideIcon accessibilityLabel="icon" color={color} size={size} />;
};

export default Icon;
