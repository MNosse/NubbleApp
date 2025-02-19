import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useAppTheme} from './useAppTheme';

export function useAppSafeArea() {
  const {bottom, top} = useSafeAreaInsets();
  const {spacing} = useAppTheme();

  return {
    bottom: Math.max(bottom, spacing.s20),
    top: Math.max(spacing.s20, top),
  };
}
