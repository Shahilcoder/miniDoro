import { View, Text, StyleSheet, Pressable } from "react-native";
import { FontAwesome6 } from '@expo/vector-icons';
import Colors from "../constants/Colors";

const ModeButton = ({ type, changeType }) => {
    return <View style={styles.root}>
        <Pressable onPress={() => changeType(prev => !type)}>
            <View style={styles.flex}>
            <Text style={styles.textbox}>{type ? "Work" : "Break"}</Text>
            <FontAwesome6 name="arrows-rotate" style={styles.buttonIcon} size={16} color="white" />
            </View>
        </Pressable>
    </View>;
};

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 30,
        width: 120,
        backgroundColor: Colors.theme.work,
        marginBottom: 24,
    },
    flex: {
        margin: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textbox: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white'
    },
    buttonIcon: {
        marginLeft: 12
    }
});

export default ModeButton;
