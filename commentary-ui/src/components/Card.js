import React from 'react';
import Radium from 'radium';
import Styles from '../constants/styles';
import CardWrapper from './styled/CardWrapper';
import Texts from './styled/Texts';
import Badge from './styled/Badge';
import withWidth from './higher-order-comp/withWIdth';


const Card = (props) => {

  const { badge, description, cardWidth, width } = props;
  const container = [styles.container];

  if (width) {
    let proportion = cardWidth / width + 0.2;
    container.push({width: cardWidth / proportion });
  } else {
    container.push({width: cardWidth});
  }



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


export default withWidth(Radium(Card));