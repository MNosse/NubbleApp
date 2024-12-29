import React from 'react';
import {EyeOffIcon} from '../../assets/icons/EyeOffIcon';
import {EyeOnIcon} from '../../assets/icons/EyeOnIcon';
import {ThemeColors} from '../../theme/theme';
import {useAppTheme} from '../../hooks/useAppTheme';

export interface IconBase {
  color?: string;
  size?: number;
}

interface Props {
  color?: ThemeColors;
  name: IconName;
  size?: number;
}

export function Icon({color = 'backgroundContrast', name, size}: Props) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  eyeOff: EyeOffIcon,
  eyeOn: EyeOnIcon,
};

type IconType = typeof iconRegistry;

type IconName = keyof IconType;
