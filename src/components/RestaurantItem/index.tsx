import React, { useState } from "react";

import AntDesign from "react-native-vector-icons/AntDesign";

import {
	Container,
	Header,
	IconFavorite,
	CoverImage,
	Content,
	Name,
	Type,
	WrapperMiniBox,
	MiniBox,
	TimeToDelivery,
	Rating,
	Votes,
} from "./styles";

interface RestaurantItemProps {
	data: Restaurant;
	isFlatList?: boolean;
}

interface Restaurant {
	id: number;
	name: string;
}

const RestaurantItem: React.FC<RestaurantItemProps> = ({ isFlatList }) => {
	const [isFavorite, setIsFavorite] = useState<boolean>(false);

	const handleFavorite = () => {
		setIsFavorite(!isFavorite);
	};

	return (
		<Container isFlatList={isFlatList}>
			<Header>
				{/* <CoverImage /> */}
				<IconFavorite
					name={isFavorite ? "heart" : "heart-o"}
					size={16}
					color="#fff"
					onPress={handleFavorite}
				/>
			</Header>
			<Content>
				<Name numberOfLines={1}>Popeyes - Shopping Campinas</Name>
				<Type>Fast Food, Burgers</Type>
				<WrapperMiniBox>
					<MiniBox>
						<TimeToDelivery>30-40 Min</TimeToDelivery>
					</MiniBox>
					<MiniBox>
						<Rating>4.7</Rating>
						<AntDesign name="star" size={12} color="#fdc60d" />
						<Votes>(457)</Votes>
					</MiniBox>
				</WrapperMiniBox>
			</Content>
		</Container>
	);
};

RestaurantItem.defaultProps = {
	isFlatList: true,
};

export default RestaurantItem;
