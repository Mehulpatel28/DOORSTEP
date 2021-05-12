import {StyleSheet} from "react-native";
import {Color} from "./Color";


const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.BG_COLOR
    },
    content_center: {
        alignItems: "center",
        justifyContent: "center"
    }
});

export default Style;