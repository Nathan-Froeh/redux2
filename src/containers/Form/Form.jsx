import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addIdea} from '../../actions/index'


class Form extends Component {
  constructor(props) {
    super(props)
    this.state={
      idea: ''
    }
  }

  handleAddIdea = (e) => {
    e.preventDefault()
    this.props.createIdea(this.state.idea)
  }

  handleChange = (e) => {
    this.setState({idea: e.target.value})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleAddIdea}>
          <input 
            type="text" 
            placeholder='Idea' 
            onChange={this.handleChange}
          />
          <input type="submit" value='Submit'/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  createIdea: (idea) => dispatch(addIdea(idea))
})

export default connect(null, mapDispatchToProps)(Form);