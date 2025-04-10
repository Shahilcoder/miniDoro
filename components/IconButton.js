import { View, Pressable, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const IconButton = ({ Icon, onPress, disabled }) => {
    return (
        <View style={styles.root}>
            <Pressable android_ripple={{color: Colors.accent.secondary, radius: 80}} onPress={onPress} disabled={disabled}>
                {Icon}
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: Colors.theme.secondary,
        overflow: "hidden"
    }
});

export default IconButton;