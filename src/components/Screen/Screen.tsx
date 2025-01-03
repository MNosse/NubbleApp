import React, {ReactNode} from 'react';
import {Box, TouchableOpacityBox} from '../Box/Box';
import {useAppSafeArea} from '../../hooks/useAppSafeArea';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';
import {useAppTheme} from '../../hooks/useAppTheme';
import {useNavigation} from '@react-navigation/native';

interface ScreenProps {
  canGoBack?: boolean;
  children: ReactNode;
  scrollable?: boolean;
}

export function Screen({
  canGoBack = false,
  children,
  scrollable = false,
}: ScreenProps) {
  const {bottom, top} = useAppSafeArea();
  const {colors} = useAppTheme();
  const navigation = useNavigation();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{flex: 1}}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={{paddingBottom: bottom, paddingTop: top}}>
          {canGoBack && (
            <TouchableOpacityBox
              flexDirection="row"
              marginBottom="s24"
              onPress={navigation.goBack}>
              <Icon color="primary" name="arrowLeft" />
              <Text marginLeft="s8" preset="paragraphMedium" semiBold>
                Voltar
              </Text>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
