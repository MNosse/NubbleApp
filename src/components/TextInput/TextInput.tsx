import React, {ReactElement, useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';
import {Box, BoxProps, $fontFamily, $fontSizes, Text} from '@components';
import {useAppTheme} from '@hooks';

export interface TextInputProps extends RNTextInputProps {
  boxProps?: BoxProps;
  errorMessage?: string;
  label: string;
  RightComponent?: ReactElement;
}

export function TextInput({
  boxProps,
  errorMessage,
  label,
  RightComponent,
  ...rnTextInputProps
}: TextInputProps) {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const $textInputContainer: BoxProps = {
    borderColor: errorMessage ? 'error' : 'gray4',
    borderRadius: 's12',
    borderWidth: errorMessage ? 2 : 1,
    flexDirection: 'row',
    padding: 's16',
  };

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <Box {...boxProps}>
      <Pressable onPress={focusInput}>
        <Text preset="paragraphMedium" marginBottom="s4">
          {label}
        </Text>
        <Box {...$textInputContainer}>
          <RNTextInput
            autoCapitalize="none"
            placeholderTextColor={colors.gray2}
            ref={inputRef}
            style={$textInputStyle}
            {...rnTextInputProps}
          />
          {RightComponent && (
            <Box justifyContent="center" marginLeft="s16">
              {RightComponent}
            </Box>
          )}
        </Box>
        {errorMessage && (
          <Text bold color="error" preset="paragraphSmall">
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </Box>
  );
}

const $textInputStyle: TextStyle = {
  flexGrow: 1,
  flexShrink: 1,
  fontFamily: $fontFamily.regular,
  padding: 0,
  ...$fontSizes.paragraphMedium,
};
