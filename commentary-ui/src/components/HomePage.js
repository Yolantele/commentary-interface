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
      selectedTab: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (moment) {
    this.setState({
      selectedTab: moment.id
    });
  }

  onRemountCommentTabs(){
    let commentsFeed = commentary.map((comment) => {
      return (
        <div style={comment.id === this.state.selectedTab? {borderLeft: `2px solid red`} : {}}>
          <Card
            key={comment.id + 'comment'}
            description={comment.comment}
            badge={comment.time}
            cardWidth={COMMENT_WIDTH - 100}
          />
          <HorizontalDivider/>
        </div>
      )
    });
    return commentsFeed
  }


  render() {

    let commentsFeed = this.onRemountCommentTabs();
    let momentsFeed = commentary.map( (moment) => {
      
      if (moment.type !== NEUTRAL) {
        return (
        <div onClick={() => {this.handleClick(moment)}}>
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
    height: 1300,
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
  selected: {

  }
}

export default Radium(HomePage);