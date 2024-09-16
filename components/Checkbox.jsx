import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { View } from 'react-native';

import colors from '@constants/colors.js';

/**
 * TODO: make the checkbox pressable/interactive
 */
export default function Checkbox({ checked, size }) {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: size,
        height: size,
        borderColor: colors.fg2,
        borderWidth: checked ? 0 : size * 0.1,
        borderRadius: size,
        backgroundColor: checked ? colors.fg1 : 'transparent',
      }}
    >
      <MaterialIcons
        name="check"
        size={size * 0.85}
        color={checked ? colors.bg2 : 'transparent'}
      />
    </View>
  );
}
