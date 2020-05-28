import React from "react";
import { Text } from "react-native";

import { Container } from "./styles";

interface RestaurantItemProps {
	data: Restaurant[];
}

interface Restaurant {
	id: number;
	name: string;
}

const RestaurantItem: React.FC<RestaurantItemProps> = () => {
	return (
		<Container>
			<Text>y</Text>
		</Container>
	);
};

export default RestaurantItem;
