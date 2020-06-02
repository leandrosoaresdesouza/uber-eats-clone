import React, { useState, useCallback } from "react";
import { FlatList, RefreshControl } from "react-native";

import Content from "../../../components/Content";
import RestaurantItem from "../../../components/RestaurantItem";
import ListFooter from "../../../components/ListFooter";
import Swiper from "../../../components/Swiper";

import { Container } from "./styles";
import { ScrollView } from "react-native-gesture-handler";

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
	const [refreshing, setRefreshing] = useState<boolean>(false);

	function wait(timeout: number) {
		return new Promise((resolve) => {
			setTimeout(resolve, timeout);
		});
	}

	const onRefresh = useCallback(() => {
		setRefreshing(true);

		wait(2000).then(() => setRefreshing(false));
	}, [refreshing]);

	return (
		<Container>
			<ScrollView
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
			>
				<Swiper />
				<Content title="Special Offers" subtitle="Limited availability">
					<FlatList
						data={restaurants}
						horizontal
						showsHorizontalScrollIndicator={false}
						keyExtractor={(item) => item.id.toString()}
						renderItem={({ item }) => <RestaurantItem data={item} />}
						ListFooterComponent={() => <ListFooter />}
					/>
				</Content>
				<Content
					title="Must Try Restaurants"
					subtitle="Local restaurants people rave about"
				>
					<FlatList
						data={restaurants}
						horizontal
						showsHorizontalScrollIndicator={false}
						keyExtractor={(item) => item.id.toString()}
						renderItem={({ item }) => <RestaurantItem data={item} />}
						ListFooterComponent={() => <ListFooter />}
					/>
				</Content>
				{restaurantsData.map((item, i) => (
					<RestaurantItem data={item} key={i} isFlatList={false} />
				))}
			</ScrollView>
		</Container>
	);
};

export default Home;
