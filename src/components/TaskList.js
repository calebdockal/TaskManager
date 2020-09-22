import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TaskList = ({tasks, toggleTask}) => (
  <View>
    {tasks.map((task) => (
      <TouchableOpacity key={task.id} onPress={() => toggleTask(task.id)}>
        <Text style={{fontSize: 24}}>{task.text}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default TaskList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
