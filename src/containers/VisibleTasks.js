import {connect} from 'react-redux'
import TaskList from '../components/TaskList'

const mapStateToProps = state => ({
    tasks:state.tasks
})

const mapDispatchToProps = dispatch => ({
    toggleTask: id => dispatch({type: 'TOGGLE_TASK', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)