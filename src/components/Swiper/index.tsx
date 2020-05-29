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
			<View>
				<Text>a</Text>
			</View>
			<View>
				<Text>b</Text>
			</View>
			<View>
				<Text>c</Text>
			</View>
			<View>
				<Text>d</Text>
			</View>
		</Container>
	);
};

export default Swiper;
