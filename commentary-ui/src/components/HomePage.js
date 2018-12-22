import React, { Component } from 'react';
import ButtonWrapper from './styled/ButtonWrapper';
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
    width: '100%',
    height:'100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    fontFamily: Styles.font,
    backgroundColor: Styles.colours.key,
  }
}

export default HomePage;