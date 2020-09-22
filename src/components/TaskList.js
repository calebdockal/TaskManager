import { DEFAULT_EXTENSIONS } from '@babel/core';
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TaskList = (tasks, toggleTasks) => (
    <View>
        {tasks.map(task =>
            <TouchableOpacity key={task.id} onPress={()=>toggleTasks(task.id)}>
                <Text style={textStyle}>{task.text}</Text>
            </TouchableOpacity>
            )}
    </View>
)
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