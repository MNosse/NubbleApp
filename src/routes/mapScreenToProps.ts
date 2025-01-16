import {IconProps} from '@components';

import {AppTabBottomTabParamList} from './AppTabNavigator';

export const mapScreenToProps: Record<
  keyof AppTabBottomTabParamList,
  {
    icon: {
      focused: IconProps['name'];
      unfocused: IconProps['name'];
    };
    label: string;
  }
> = {
  HomeScreen: {
    icon: {
      focused: 'homeFill',
      unfocused: 'home',
    },
    label: 'Início',
  },
  NewPostScreen: {
    icon: {
      focused: 'newPost',
      unfocused: 'newPost',
    },
    label: 'Novo post',
  },
  FavoriteScreen: {
    icon: {
      focused: 'bookmarkFill',
      unfocused: 'bookmark',
    },
    label: 'Favorito',
  },
  MyProfileScreen: {
    icon: {
      focused: 'profileFill',
      unfocused: 'profile',
    },
    label: 'Meu perfil',
  },
};
