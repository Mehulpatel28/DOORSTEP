import { StyleSheet } from 'react-native'
import { Color } from '../../utils/Color'

const styles = StyleSheet.create({
    container: {
        marginTop: 100
    },
    img: {
        alignItems: 'center',
        marginBottom: 25,
        marginLeft: 115,
        marginTop: 10,
    },
    btn1: {
        marginTop: 35,
        height: 50,
        width: 220,
        marginLeft: 10,
        backgroundColor: Color.PRIMARY,
        borderRadius: 25,
        alignSelf: 'center',
    },
    txt: {
        justifyContent: 'center',
        alignSelf: 'center',
        color: Color.WHITE,
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 5,
    },
    txt1: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 50,
        fontSize: 17,
        color: Color.WHITE
    }
})
export default styles;