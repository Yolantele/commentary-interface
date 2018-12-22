import React from 'react';
import Styles from '../constants/styles';
import Radium from 'radium';


class FeedContainer extends React.Component {

  render() {

  const { feedHeight, feedWidth, title } = this.props;

  const container = [styles.container]
  container.push({height: feedHeight, width: feedWidth});

    return(
      <div style={container}>
        <div style={styles.header}>{title}</div>
        {/* <div style={{height: height, width: width}}/> */}
        {this.props.children}
      </div>
    );
  }

}

const styles = {
  container: { 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: Styles.colours.white,
    borderRadius: 5,
    padding: 40
  },
  header: {
    color: Styles.colours.primary,
    fontFamily: 'Roboto',
    fontWeight: '800',
    paddingTop: 30,
    paddingBottom: 40
  }
};


export default Radium(FeedContainer);