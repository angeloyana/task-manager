import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import Button from '@components/Button.jsx';
import Input from '@components/Input.jsx';
import Separator from '@components/Separator.jsx';
import CreateTaskModal from '@components/tasks/CreateTaskModal.jsx';
import UpdateTaskModal from '@components/tasks/UpdateTaskModal.jsx';
import Task from '@components/tasks/Task.jsx';
import colors from '@constants/colors.js';
import useTasksDatabase from '@hooks/useTasksDatabase.js';

export default function TasksScreen() {
  const [tasks, addTask, updateTask, deleteTask] = useTasksDatabase();
  const [filterValue, setFilterValue] = useState('');
  const [createTaskModalVisible, setCreateTaskModalVisible] = useState(false);
  const [taskToModify, setTaskToModify] = useState(null);

  const handleChangeFilterValue = (value) => {
    setFilterValue(value.toLowerCase());
  };

  const handleToggleTaskCheck = async (task) => {
    await updateTask({ ...task, checked: task.checked ? 0 : 1 });
  };

  const handleSaveTask = async (description) => {
    await addTask(description);
    setCreateTaskModalVisible(false);
  };

  const handleUpdateTask = async (task) => {
    await updateTask(task);
    setTaskToModify(null);
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    setTaskToModify(null);
  };

  const filterTasks = () => {
    return tasks.filter((task) =>
      task.description.toLowerCase().includes(filterValue)
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>TASKS</Text>
        <View style={styles.searchInputWrapper}>
          <MaterialIcons
            name="search"
            size={20}
            color={colors.fg2}
            style={styles.searchInputIcon}
          />
          <Input
            placeholder="Search for task"
            value={filterValue}
            onChangeText={handleChangeFilterValue}
            style={styles.searchInput}
          />
        </View>
      </View>
      <FlatList
        data={filterTasks()}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Task
            task={item}
            onPress={handleToggleTaskCheck}
            onLongPress={setTaskToModify}
          />
        )}
        ItemSeparatorComponent={<Separator size={15} />}
        style={styles.taskList}
      />
      <Button
        onPress={() => setCreateTaskModalVisible(true)}
        style={styles.addBtn}
      >
        <MaterialIcons name="add" size={20} color={colors.fg1} />
      </Button>
      <CreateTaskModal
        visible={createTaskModalVisible}
        onClose={() => setCreateTaskModalVisible(false)}
        onSave={handleSaveTask}
      />
      <UpdateTaskModal
        visible={!!taskToModify}
        task={taskToModify}
        onClose={() => setTaskToModify(null)}
        onDelete={handleDeleteTask}
        onSave={handleUpdateTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  addBtn: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  headerContainer: {
    gap: 10,
    paddingHorizontal: '10%',
  },
  headerTitle: {
    color: colors.fg1,
    fontSize: 27,
    fontWeight: 'bold',
  },
  mainContainer: {
    flex: 1,
    gap: 15,
    paddingVertical: '10%',
  },
  searchInput: {
    paddingLeft: 45,
  },
  searchInputIcon: {
    position: 'absolute',
    left: 15,
    zIndex: 1,
  },
  searchInputWrapper: {
    justifyContent: 'center',
    position: 'relative',
  },
  taskList: {
    paddingHorizontal: '10%',
  },
});
