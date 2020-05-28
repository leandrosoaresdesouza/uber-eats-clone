import React from "react";
import { Text } from "react-native";

import { Container } from "./styles";

interface RestaurantItemProps {
	data: Restaurant;
}

interface Restaurant {
	id: number;
	name: string;
}

const RestaurantItem: React.FC<RestaurantItemProps> = ({
	data: { name, id },
}) => {
	return (
		<Container>
			<Text>{name}</Text>
			<Text>{id}</Text>
		</Container>
	);
};

export default RestaurantItem;
