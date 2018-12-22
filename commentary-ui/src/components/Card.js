import React from 'react';
import Radium from 'radium';
import Styles from '../constants/styles';
import CardWrapper from './styled/CardWrapper';
import Texts from './styled/Texts';
import Badge from './styled/Badge';


const Card = (props) => {

  const { badge, description, cardWidth } = props;
  const container = [styles.container];

  container.push({width: cardWidth});



  return (
    <CardWrapper>
      <div style={container}> 
        <Badge>{badge}</Badge>
        <Texts>{description}</Texts>
      </div>
    </CardWrapper>
  );

}


const styles = {
container: { 
  display: 'flex',
  flexDirection: 'row',
  fontFamily: Styles.font,
  backgroundColor: Styles.colours.pureWhite,
}
};


export default Radium(Card)