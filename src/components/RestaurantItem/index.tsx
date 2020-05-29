import React from "react";

import {
	Container,
	Header,
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
			<Header>{/* <CoverImage /> */}</Header>
			<Content>
				<Name numberOfLines={1}>Popeyes - Shopping Campinas</Name>
				<Type>Fast Food, Burgers</Type>
				<WrapperMiniBox>
					<MiniBox>
						<TimeToDelivery>30-40 Min</TimeToDelivery>
					</MiniBox>
					<MiniBox>
						<Rating>4.7</Rating>
						<Votes>(457)</Votes>
					</MiniBox>
				</WrapperMiniBox>
			</Content>
		</Container>
	);
};

export default RestaurantItem;
