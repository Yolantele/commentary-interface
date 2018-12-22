import React, { Component } from 'react';
import Button from './styled/ButtonWrapper';
import Styles from '../constants/styles';

class HomePage extends React.Component {

  render() {

    return(
      <div style={styles.container}>
        <ButtonWrapper>
          Styled Component Test
        </ButtonWrapper>
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
    fontFamily: Styles.font,
    backgroundColor: Styles.colours.key,
  }
}

export default HomePage;