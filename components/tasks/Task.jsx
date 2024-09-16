import { Pressable, StyleSheet, Text, Vibration, View } from 'react-native';

import Checkbox from '@components/Checkbox.jsx';
import colors from '@constants/colors.js';

export default function Task({ task, onLongPress, onPress, ...props }) {
  const handleOnLongPress = async () => {
    Vibration.vibrate(70);
    await onLongPress(task);
  };

  const handleOnPress = async () => {
    await onPress(task);
  };

  return (
    <Pressable
      style={styles.container}
      delayLongPress={300}
      onLongPress={handleOnLongPress}
      onPress={handleOnPress}
      {...props}
    >
      <Checkbox checked={task.checked} size={16} />
      <View style={styles.descriptionWrapper}>
        <Text
          style={task.checked ? styles.checkedDescription : styles.description}
        >
          {task.description}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  checkedDescription: {
    color: colors.fg2,
    textDecorationLine: 'line-through',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    padding: 20,
    borderRadius: 7,
    backgroundColor: colors.bg2,
  },
  description: {
    color: colors.fg1,
  },
  descriptionWrapper: {
    flexShrink: 1,
  },
});
