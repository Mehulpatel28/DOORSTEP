import { StyleSheet } from 'react-native'
import { Color } from '../../utils/Color'

const styles = StyleSheet.create({
    introImageStyle: {
        resizeMode: "center",
        marginTop: 60,

        height: 300,
    },
    buttonCircle: {
        marginTop: 4,
        width: 40,
        height: 40,
        backgroundColor: Color.PURE_ORANGE,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default styles