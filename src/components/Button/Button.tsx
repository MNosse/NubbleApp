import React from 'react';
import {Text} from '../Text/Text';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {buttonPresets} from './buttonPresets';
import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator';

export type ButtonPreset = 'primary' | 'outline';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  disabled?: boolean;
  preset?: ButtonPreset;
}

export function Button({
  title,
  loading,
  preset = 'primary',
  disabled = false,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];
  return (
    <TouchableOpacityBox
      alignItems="center"
      borderRadius="s16"
      disabled={disabled || loading}
      height={50}
      justifyContent="center"
      paddingHorizontal="s20"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}
    >
      {loading ? (
        <ActivityIndicator color={buttonPreset.content} />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}