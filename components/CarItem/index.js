import {Text, View, ImageBackground } from 'react-native';
import styles from './style';
import StyleButton from '../StyleButton';

const CarItem = (props) => {

  const {name, tagline, image} = props.car

  return (
    <View style={styles.carContainer}>
        <ImageBackground source={image} style={styles.image} />

        <View style={styles.titles}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>{tagline}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <StyleButton 
            type="primary" 
            content={'Contum Order'}
            onPress={() => {
              console.warn('Costum Order Was Pressed')
            }}
          />

          <StyleButton 
            type="secondary" 
            content={'Exting Inventory'}
            onPress={() => {
              console.warn('Exting Inventory Was Pressed')
            }}
          />
        </View>


    </View>
  );
}

export default CarItem