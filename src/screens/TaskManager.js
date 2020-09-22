import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AddTask from '../containers/AddTask';
import VisibleTasks from '../containers/VisibleTasks';

class TaskManager extends Component {
  state = {
    tasks: [],
    completed: 'NOT_DONE_TASKS'
  };
  render() {
    return (
      <View style={styles.container}>
        <AddTask />

        <View>
          <VisibleTasks />
        </View>
      </View>
    );
  }
}

export default TaskManager;

const styles = StyleSheet.create({
  container: {flex: 1}
});
