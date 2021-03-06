import styled from "styled-components/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

interface RestaurantItemProps {
	isFlatList?: boolean;
}

export const Container = styled.View`
	width: ${(props: RestaurantItemProps) => (props.isFlatList ? "260" : "100%")};
	background-color: #fff;
	padding: 10px;
	margin-right: 10px;
	margin-top: 10px;
`;

export const Header = styled.View`
	height: 125px;
	background-color: #ccc;
`;

export const CoverImage = styled.Image``;

export const IconFavorite = styled(FontAwesome)`
	position: absolute;
	right: 20px;
	bottom: 20px;
`;

export const Content = styled.View``;

export const Name = styled.Text`
	margin-top: 10px;
	color: #000;
`;

export const Type = styled.Text`
	color: #959595;
	margin-top: 5px;
`;

export const WrapperMiniBox = styled.View`
	margin-top: 5px;
	flex-direction: row;
`;

export const MiniBox = styled.View`
	background-color: #f5f4f9;
	margin-right: 10px;
	margin-top: 5px;
	padding: 5px;
	flex-direction: row;
	align-items: center;
`;

export const TimeToDelivery = styled.Text`
	color: #3b3b3d;
	font-size: 12px;
`;

export const Rating = styled.Text`
	color: #3b3b3d;
	font-size: 12px;
	margin-right: 3px;
`;

export const Votes = styled.Text`
	color: #959595;
	font-size: 12px;
	margin-left: 3px;
`;
