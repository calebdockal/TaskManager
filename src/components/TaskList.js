import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TaskList = ({tasks, toggleTask}) => (
  <View>
    {tasks.map(task => 
      <TouchableOpacity key={task.id} onPress={() => toggleTask(task.id)}>
        <Text style={textStyle}>{task.text}</Text>
      </TouchableOpacity>
    )}
  </View>
);

export default TaskList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 24,
    textDecorationLine: task.completed ? 'line-through' : 'none'
  }
});
