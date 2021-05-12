import {StyleSheet} from 'react-native'
import {Color} from '../../utils/Color'

const styles = StyleSheet.create({
    img: {
      alignItems: 'center',
      marginLeft: 135,
      marginTop: 30,
    },
    btn1: {
      marginTop: 10,
      height: 50,
      marginLeft: 20,
      width: 230,
      backgroundColor: Color.PRIMARY,
      borderRadius: 25,
      alignSelf: 'center',
    },
    txt: {
      justifyContent: 'center',
      alignSelf: 'center',
      color:  Color.WHITE,
      fontSize: 25,
      fontWeight: 'bold',
      marginTop: 5,
    },
    txt1:{
      justifyContent: 'center',
      alignSelf: 'center',
      fontSize: 17,
      marginTop: 35,
      color: Color.WHITE
    }
  });

  export default styles