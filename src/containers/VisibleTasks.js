import {connect} from 'react-redux';
import TaskList from '../components/TaskList';
import {toggleTask} from '../redux/actions';
const mapStateToProps = (state) => ({
  tasks: state.tasks
});

const mapDispatchToProps = (dispatch) => ({
  toggleTask: (id) => dispatch(toggleTask(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
