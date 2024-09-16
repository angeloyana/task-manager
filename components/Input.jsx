import { StyleSheet, TextInput } from 'react-native';

import colors from '@constants/colors.js';

export default function Input({
  style,
  placeholderTextColor = colors.fg2,
  selectionColor = colors.fg2,
  ...props
}) {
  return (
    <TextInput
      placeholderTextColor={placeholderTextColor}
      selectionColor={selectionColor}
      style={[styles.textInput, style]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    padding: 11,
    borderRadius: 7,
    color: colors.fg1,
    backgroundColor: colors.bg2,
  },
});
