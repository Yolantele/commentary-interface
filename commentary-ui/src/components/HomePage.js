import React, { Component } from 'react';
import Button from './styled/Button';
import Styles from '../constants/styles';

class HomePage extends React.Component {

  render() {

    return(
      <div style={styles.container}>
        <Button>
          Stled Component Test
        </Button>
      </div>

    );
  }

}
const styles = {
  container: { 
    padding: 20,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    fontFamily: Styles.font
  }
}

export default HomePage;