import * as SQLite from 'expo-sqlite';
import { useEffect, useState } from 'react';

export default function useTasksDatabase() {
  const db = SQLite.openDatabaseSync('task-manager');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const initialize = async () => {
      await db.execAsync(`CREATE TABLE IF NOT EXISTS tasks (
                            id INTEGER PRIMARY KEY,
                            description TEXT,
                            checked INTEGER
                          )`);

      const result = await db.getAllAsync('SELECT * FROM tasks');
      setTasks(result);
    };

    initialize();
  }, []);

  const addTask = async (description, checked = 0) => {
    const { lastInsertRowId } = await db.runAsync(
      'INSERT INTO tasks (description, checked) VALUES (?, ?)',
      description,
      checked
    );

    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: lastInsertRowId,
        description,
        checked,
      },
    ]);
  };

  const updateTask = async (task) => {
    await db.runAsync(
      'UPDATE tasks SET description = ?, checked = ? WHERE id = ?',
      task.description,
      task.checked,
      task.id
    );

    setTasks((prevTasks) =>
      prevTasks.map((prevTask) => (prevTask.id === task.id ? task : prevTask))
    );
  };

  const deleteTask = async (id) => {
    await db.runAsync('DELETE FROM tasks WHERE id = ?', id);
    setTasks((prevTasks) => prevTasks.filter((prevTask) => prevTask.id != id));
  };

  return [tasks, addTask, updateTask, deleteTask];
}
