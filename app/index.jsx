import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import Button from '@components/Button.jsx';
import colors from '@constants/colors.js';

export default function MainScreen() {
  return (
    <>
      <View style={styles.introContainer}>
        <Text style={styles.introText1}>TASK MANAGER</Text>
        <Text style={styles.introText2}>Manage your tasks in one place.</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Button
          text="Enter"
          onPress={() => router.push('/tasks')}
          style={styles.enterBtn}
        />
      </View>
      <View style={styles.metaContainer}>
        <Text style={styles.metaText}>Created by Angelo Yana</Text>
        <Text style={styles.metaText}>v0.0.0</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  enterBtn: {
    width: '80%',
  },
  introContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  introText1: {
    color: colors.fg1,
    fontSize: 27,
    fontWeight: 'bold',
  },
  introText2: {
    color: colors.fg1,
  },
  metaContainer: {
    alignItems: 'center',
    bottom: 30,
  },
  metaText: {
    color: colors.fg2,
  },
});
