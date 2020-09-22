import {connect} from 'react-redux'
import TaskList from '../components/TaskList'

const mapStateToProps = state => ({
    tasks:state.tasks
})

const mapDispatchToProps = dispatch => ({
    toggleTask: id => dispatch(toggleTask(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)