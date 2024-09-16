import { useState } from 'react';
import { Modal, StyleSheet, TextInput, View } from 'react-native';

import Button from '@components/Button.jsx';
import Input from '@components/Input.jsx';
import colors from '@constants/colors.js';

export default function CreateTaskModal({ visible, onClose, onSave }) {
  const [description, setDescription] = useState('');

  const handleOnClose = () => {
    onClose();
    setDescription('');
  };

  const handleOnSave = async () => {
    await onSave(description);
    setDescription('');
  };

  return (
    <Modal
      visible={visible}
      onRequestClose={handleOnClose}
      transparent={true}
      statusBarTranslucent={true}
      animationType="fade"
    >
      <View style={styles.backdrop}>
        <View style={styles.modalContainer}>
          <Input
            placeholder="What's your task?"
            value={description}
            onChangeText={setDescription}
          />
          <View style={styles.btnGroup}>
            <Button
              text="Cancel"
              onPress={handleOnClose}
              underlayColor={colors.bg2Active}
              style={[styles.btn, styles.cancelBtn]}
            />
            <Button
              text="Save"
              disabled={!description}
              onPress={handleOnSave}
              style={styles.btn}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  btn: {
    flex: 1,
    padding: 10,
  },
  btnGroup: {
    flexDirection: 'row',
    gap: 10,
  },
  cancelBtn: {
    backgroundColor: colors.bg2,
  },
  modalContainer: {
    gap: 10,
    width: '80%',
    padding: 16,
    borderRadius: 15,
    backgroundColor: colors.bg1,
  },
});
