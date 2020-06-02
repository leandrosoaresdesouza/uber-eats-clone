import React from "react";
import { View, Text } from "react-native";

import { Container } from "./styles";

const Swiper: React.FC = () => {
	return (
		<Container
			autoplay
			dotColor="rgba(255, 255, 255, 0.6)"
			activeDotColor="#fff"
		>
			<View style={{ height: 180, width: 100 }}>
				<Text>a</Text>
			</View>
			<View style={{ height: 180, width: 100 }}>
				<Text>b</Text>
			</View>
			<View style={{ height: 180, width: 100 }}>
				<Text>c</Text>
			</View>
			<View style={{ height: 180, width: 100 }}>
				<Text>d</Text>
			</View>
		</Container>
	);
};

export default Swiper;
