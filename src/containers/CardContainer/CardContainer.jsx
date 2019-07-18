import React from 'react';
import {connect} from 'react-redux';
import Card from '../../components/Card/card';




const CardContainer = (props) => {

  console.log(props.ideas)
  const cards = props.ideas.map(idea => <Card idea={idea}/>)

  return(
    <div>
      {cards}
    </div>
  )
}

const mapStateToProps = state => ({
  ideas: state.ideas
})


export default connect(mapStateToProps, null)(CardContainer)