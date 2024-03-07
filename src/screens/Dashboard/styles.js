import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/Colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black,
        justifyContent: 'space-between'
    },
    main: {
        paddingHorizontal: 15,
        flex: 0.85,
    },
    backButton: {
        height: 25,
        width: 25,
        borderRadius: 25/2,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    backIcon: {
        height: 25,
        width: 25
    },
    reviewText: {
        fontSize: 14,
        color: COLORS.slateGrey,
        marginBottom: 10
    },
    questionHeading: {
        fontSize: 22,
        color: COLORS.white,
    },
    circleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    circle: {
        height: 3,
        marginHorizontal: 2,
    },
    quizQuestion: {
        fontSize: 18,
        color: COLORS.white,
        marginVertical: 25
    },
    option: {
        padding: 15,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: COLORS.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
    },
    answerText: {
        fontSize: 14,
        color: COLORS.white
    },
    checkIconStyle: {
        height: 20,
        width: 20,
        borderRadius: 20 / 2,
        borderWidth: 0.7,
        borderColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkIcon: {
        height: 10,
        width: 10,
        tintColor: COLORS.white
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    explanation: {
        fontSize: 14,
        color: COLORS.slateGrey,
        width: '80%'
    },
    infoIcon: {
        height: 20,
        width: 20,
        tintColor: COLORS.yellow,
        alignSelf: 'flex-end'
    },
    bottomView: {
        flex: 0.15,
        paddingHorizontal: 15,
    },
    button: {
        backgroundColor: COLORS.SteelBlue,
        height: 50,
        width: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: COLORS.white
    },
});