import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Container } from "./styles";

const PastOrders: React.FC = () => {
	const navigation = useNavigation();

	return (
		<Container>
			<Text>PastOrders</Text>
			<TouchableOpacity onPress={() => navigation.navigate("UpcomingOrders")}>
				<Text>Go to Upcoming</Text>
			</TouchableOpacity>
		</Container>
	);
};

export default PastOrders;
