import React from 'react';
import Styles from '../constants/styles';
import Radium from 'radium';
import withWidth from './higher-order-comp/withWIdth';

class FeedContainer extends React.Component {

  render() {

  const { feedHeight, feedWidth, title, width } = this.props;

  const container = [styles.container];
  if ( width ) {
    let proportion = feedWidth / width;
    container.push({height: feedHeight, width: feedWidth / proportion});
  } else {
    container.push({height: feedHeight, width: feedWidth});
  }

    return(
        <div style={container}>
          <div style={styles.header}>{title}</div>
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


export default withWidth(Radium(FeedContainer));