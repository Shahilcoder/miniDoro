import { View, StyleSheet } from "react-native";
import Timer from "../components/Timer";
import ModeButton from "../components/ModeButton";
import { useState } from "react";

const Main = () => {
	const [isWork, setIsWork] = useState(() => true);

	return <View style={styles.root}>
		<ModeButton type={isWork} changeType={setIsWork} />

		{isWork && <Timer max_time={25 * 60} isWork={isWork} />}
		{!isWork && <Timer max_time={5 * 60} isWork={isWork} />}
	</View>;
};

const styles = StyleSheet.create({
	root: {
		alignItems: 'center'
	}
});

export default Main;
