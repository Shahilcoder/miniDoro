import { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Entypo } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import IconButton from "./IconButton";
import Colors from "../constants/Colors";

let id;

// AppRegistry.registerHeadlessTask('timer', () => {
//     id = setInterval(() => {
//         // setTime(prev => prev - 1);
//     }, 1000);
// });


const Timer = ({ max_time, isWork }) => {
    const [time, setTime] = useState(() => max_time);
    const [minute, setMinute] = useState(() => Math.floor(max_time / 60));
    const [sec, setSec] = useState(() => max_time % 60);
    const [fill, setFill] = useState(() => 0);
    const [started, setStarted] = useState(() => false);

    const startTimer = () => {
        if (time > 0) {
            setStarted(true);

            if (time === max_time) {
                if (isWork) {
                    playAnyaBaku();
                } else {
                    playAnyaPeanuts();
                }
            }

            // AppRegistry.startHeadlessTask(1, 'timer');
            id = setInterval(() => {
                setTime(prev => prev - 1);
            }, 1000);
        }
    };

    const stopTimer = () => {
        setStarted(false);

        // AppRegistry.cancelHeadlessTask(1, 'timer');
        clearInterval(id);
    };

    const milisToFill = (millis) => {
        return Math.floor((millis - max_time) * (100 - 0) / (0 - max_time) + 0);
    };

    const playAnyaBaku = async () => {
        const { sound } = await Audio.Sound.createAsync(require('../assets/tones/AnyaHeiakim.mp3'));
        await sound.playAsync();
    };

    const playAnyaPeanuts = async () => {
        const { sound } = await Audio.Sound.createAsync(require('../assets/tones/AnyaPeanuts.mp3'));
        await sound.playAsync();
    };

    const playPikachu = async () => {
        const { sound } = await Audio.Sound.createAsync(require('../assets/tones/Pikachu.mp3'));
        await sound.playAsync();
    }

    useEffect(() => {
        return () => {
            clearInterval(id);
        }
    }, []);

    useEffect(() => {
        if (time <= 0) {
            clearInterval(id);
            setStarted(false);

            playPikachu();
        }

        setMinute(prev => Math.floor(time / 60));
        setSec(prev => time % 60);

        setFill(prev => milisToFill(time));
    }, [time]);

    return (
        <View style={styles.container}>
            <AnimatedCircularProgress
                size={200}
                width={8}
                fill={fill}
                rotation={0}
                lineCap="square"
                tintColor={Colors.theme.primary}
                backgroundColor={Colors.accent.primary}>
                {
                    (fill) => (
                        <Text style={styles.timerText}>
                            {Math.floor(minute / 10) ? minute : `0${minute}`}:{Math.floor(sec / 10) ? sec : `0${sec}`}
                        </Text>
                    )
                }
            </AnimatedCircularProgress>
            <View style={styles.buttonView}>
                <IconButton Icon={<Entypo name="controller-play" style={styles.buttonIcon} size={24} color="white" />}
                    onPress={startTimer} disabled={started}
                />
                <IconButton Icon={<Entypo name="controller-stop" style={styles.buttonIcon} size={24} color="white" />}
                    onPress={stopTimer} disabled={!started}
                />
                <IconButton Icon={<Entypo name="cw" style={styles.buttonIcon} size={24} color="white" />}
                    onPress={() => {
                        stopTimer();
                        setTime(max_time);
                        // startTimer();
                    }}
                    disabled={false}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    timerText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    buttonView: {
        marginTop: 24,
        flexDirection: 'row',
        width: 180,
        justifyContent: 'space-between'
    },
    buttonIcon: {
        margin: 12
    }
});

export default Timer;
