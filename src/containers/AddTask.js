import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux'
class AddTask extends React.Component {
    state = {
        text: ''
    }

    addTask = (text) =>{
        //
        this.props.dispatch({type: 'ADD_TASK', text})
        this.setState({text: ''})
    }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Tasks</Text>
        </View>
        <ScrollView style={styles.scrollStyle}></ScrollView>
        <View>
          <TextInput
            onChangeText={(text)=> this.setState({text})}
            value ={this.state.text}
            style={styles.TextInput}
            placeholder="Tasks"
            underlineColorAndroid="transparent"></TextInput>
        </View>
        <TouchableOpacity onPress={()=> this.addTask(this.state.text)} style={styles.addButton}>
          <Text style={styles.plusStyle}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(AddTask);

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {
    backgroundColor: '#464a48',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  headerText: {color: '#fff', fontSize: 30},
  scrollStyle: {flex: 1},
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 90,
    backgroundColor: '#464a48',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  plusStyle: {color: 'white', fontSize: 30},
});
