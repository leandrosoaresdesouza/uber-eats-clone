import React, { useState } from "react";
import { FlatList } from "react-native";

import Content from "../../../components/Content";
import RestaurantItem from "../../../components/RestaurantItem";
import LastItem from "../../../components/LastItem";

import { Container } from "./styles";

const restaurantsData = [
	{
		id: 1,
		name: "Popeyes - Shopping Campinas",
		type: ["Fast Food", "Burgers", "Sandwich", "Chicken"],
		rating: {
			level: 5,
			votes: 570,
		},
		coverImage: {
			image: "http://",
		},
		infos: {
			address: {
				street: "Rua Jacy Teixeira de Camargo",
				number: 940,
				city: "Campinas",
				zipcode: 13050913,
			},
			businessHours: {
				open: 11,
				close: 21,
			},
		},
	},
	{
		id: 2,
		name: "Popeyes - Shopping Campinas",
		type: ["Fast Food", "Burgers", "Sandwich", "Chicken"],
		rating: {
			level: 5,
			votes: 570,
		},
		coverImage: {
			image: "http://",
		},
		infos: {
			address: {
				street: "Rua Jacy Teixeira de Camargo",
				number: 940,
				city: "Campinas",
				zipcode: 13050913,
			},
			businessHours: {
				open: 11,
				close: 21,
			},
		},
	},
];

interface Restaurant {
	id: number;
	name: string;
}

const Home: React.FC = () => {
	const [restaurants, setRestaurants] = useState<Restaurant[]>(restaurantsData);

	return (
		<Container>
			<Content title="Special Offers" subtitle="Limited availability">
				<FlatList
					data={restaurants}
					horizontal
					showsHorizontalScrollIndicator={false}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => <RestaurantItem data={item} />}
					ListFooterComponent={() => <LastItem />}
				/>
			</Content>
		</Container>
	);
};

export default Home;
