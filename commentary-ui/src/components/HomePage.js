import React from 'react';
import Card from './Card';
import Styles from '../constants/styles';
import Radium from 'radium';
import commentary from '../commentaryData';
import FeedContainer from './FeedContainer';
import HorizontalDivider from './styled/HorizontalDivider';
import VerticalDivider from './styled/VerticalDivider';

const NEUTRAL = "normal moment";
const HEIGHT = 1100;
const COMMENT_WIDTH = 800;
const MOMENT_WIDTH = 300;

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      selectedComment: null
    }
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick (item) {
    console.log('Clicked!!' + item.id);
  }


  render() {
    let commentsFeed = commentary.map((moment, index) => {
      return (
          
        <div>
          <Card
            key={moment.id + 'comment'}
            description={moment.comment}
            badge={moment.time}
            cardWidth={COMMENT_WIDTH - 100}
          />
          <HorizontalDivider/>
        </div>
      )
    });

    let momentsFeed = commentary.map( (moment, index) => {
      if (moment.type !== NEUTRAL) {
        return (
        <div onClick={(moment) => {this.handleClick(moment)}}>
          <Card
            key={moment.id + 'momment'}
            description={moment.type}
            badge={moment.time}
            cardWidth={MOMENT_WIDTH - 100}
          />
          <HorizontalDivider/>
        </div>
        )
      } else return null
    });

    return(
      <div>
        <div style={styles.header}/>
        <div style={styles.container}>
        <FeedContainer
          title='Live commentary'
          feedHeight={HEIGHT}
          feedWidth={COMMENT_WIDTH}
        >
         {commentsFeed}
        </FeedContainer>
        <VerticalDivider/>
        <FeedContainer 
          title='Key moments'
          feedHeight={HEIGHT}
          feedWidth={MOMENT_WIDTH}
        >
          {momentsFeed}
        </FeedContainer>
        </div>
        <div style={styles.header}/>
      </div>

    );
  }

}
const styles = {
  container: { 
    padding: 30,
    display: 'flex',
    height: 900,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    fontFamily: Styles.font,
    backgroundColor: Styles.colours.key,
    borderLeft: '100px',
    borderColor: Styles.colours.primary
  },
  header: {
    height:200, 
    backgroundColor: Styles.colours.primary
  },
  sideBar: {
    width: 150,

  },
}

export default Radium(HomePage);