import { StyleSheet, Text, TouchableHighlight } from 'react-native';

import colors from '@constants/colors.js';

export default function Button({
  text,
  style,
  textStyle,
  underlayColor = colors.accent1Active,
  children,
  ...props
}) {
  return (
    <TouchableHighlight
      underlayColor={underlayColor}
      style={[styles.btnContainer, style]}
      {...props}
    >
      {text ? (
        <Text style={[styles.btnText, textStyle]}>{text}</Text>
      ) : (
        children
      )}
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    padding: 16,
    borderRadius: 7,
    backgroundColor: colors.accent1,
  },
  btnText: {
    color: colors.fg1,
  },
});
