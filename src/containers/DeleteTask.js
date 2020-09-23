import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import {deleteTask} from '../redux/actions';
class DeleteTask extends React.Component {
  deleteTask = () => {
    this.props.dispatch(deleteTask(id));
  };
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.deleteTask({index: id})}
          style={{
            backgroundColor: '#464a48',
            height: 90,
            width: 90,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 8
          }}>
          <Text style={{color: 'white', fontSize: 30}}>-</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(DeleteTask);
