import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Routes from '../../router/routes';
import {Color} from '../../utils/Color';
import { Label } from '../../component';
import styles from './Styles'
import Icon from 'react-native-vector-icons/dist/Octicons';


const Boarding = ({ navigation }) => {
  const slides = [
    {
      key: 's1',
      text: "Experience a expertise Cleaning Services in different Category",
      title: "Advanced Cleaning",
      image: require('../../assets/images/slider1.png'),
      // backgroundColor: '#20d2bb' // '#20d2bb',
    },
    {
      key: 's2',   
      title: 'A Long-Lasting Work',
      text: 'We are not just building. We are create',
      image: require('../../assets/images/slider2.png'),
      // backgroundColor: '#20d2bb',
    },
    {
      key: 's3',
      title: 'Drain your checkbook',
      text: 'Experience a expertise Cleaning Services in different Category',
      image: require('../../assets/images/slider3.png'),
      // backgroundColor: '#22bcb5',
    },

  ];
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };

  const RenderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>

      <Icon name="arrow-right" style={{fontSize:25,color:Color.WHITE}}/>
      
      </View>
    );
  };

  const RenderDoneButton = () => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(Routes.Login)}>
        <View style={styles.buttonCircle}>
      <Icon name="check" style={{fontSize:25,fontWeight:'bold',color:Color.WHITE}}/>
         
</View>
      </TouchableOpacity>
    );
  };

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Color.WHITE,
          alignItems: 'center',
          paddingBottom: 100,
        }}>
       

        <Image
          style={styles.introImageStyle}
          source={item.image} />
           <Label mt={40} align="center" xxxxlarge bolder>
          {item.title}
        </Label>
        <Label mt={30} align="center" xlarge>
          {item.text}
        </Label>


      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        null
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          renderDoneButton={RenderDoneButton}
          renderNextButton={RenderNextButton}
        />
      )}
    </>
  );
};

export default Boarding;

