import React, { useState } from "react";
import { FlatList } from "react-native";

import Content from "../../../components/Content";
import RestaurantItem from "../../../components/RestaurantItem";

import { Container } from "./styles";

const fakeData = [
	{
		id: 1,
		name: "x",
	},
	{
		id: 2,
		name: "y",
	},
	{
		id: 3,
		name: "z",
	},
];

interface Restaurant {
	id: number;
	name: string;
}

const Home: React.FC = () => {
	const [restaurants, setRestaurants] = useState<Restaurant[]>(fakeData);

	return (
		<Container>
			<Content title="Special Offers" subtitle="Limited availability">
				<FlatList
					data={restaurants}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => <RestaurantItem data={item} />}
				/>
			</Content>
		</Container>
	);
};

export default Home;
