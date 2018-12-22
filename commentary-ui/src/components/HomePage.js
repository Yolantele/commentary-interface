import React from 'react';
import CardWrapper from './styled/CardWrapper';
import Styles from '../constants/styles';
import Radium from 'radium';

import FeedContainer from './FeedContainer'

class HomePage extends React.Component {

  render() {

    return(
      <div>
        <div style={styles.header}/>
        <div style={styles.container}>
        <div style={styles.sideBar}/>
        <FeedContainer
          title='Live commentary'
          feedHeight={800}
          feedWidth={800}
        >
         'testing children'
        </FeedContainer>
        <div style={styles.verticalDivider}/>
        <FeedContainer 
          title='Key moments'
          feedHeight={400}
          feedWidth={400}
        >
          <CardWrapper>
            Styled Component Test
          </CardWrapper>
        </FeedContainer>
        </div>
      </div>

    );
  }

}
const styles = {
  container: { 
    padding: 50,
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
    height:100, 
    width: '100vw', 
    color: 'red',
    backgroundColor: Styles.colours.primary
  },
  sideBar: {
    width: 150,

  },
  verticalDivider: {
    paddingLeft: 10,
    paddingRight: 10,
  }
}

export default Radium(HomePage);