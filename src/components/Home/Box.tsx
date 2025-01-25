import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../../styles/Home/BoxStyle";
import Vector from "../../assets/images/time.svg";
import DisableClock from "../../assets/Icons/DisableClock.svg";
import Like from "../../assets/images/like.svg";
import DisableLike from "../../assets/Icons/DisableLike.svg";
import Comment from "../../assets/images/comment.svg";
import DisableComment from "../../assets/Icons/DisableComment.svg";

export interface BoxProps {
	postId: number;
	title: string;
	image: string;
	keywords: string[];
	date: string;
	likes: number;
	comments: string;
	liked: boolean;
	disabled?: boolean;
}

const Box: React.FC<BoxProps> = ({
	postId,
	title,
	image,
	keywords,
	date,
	likes,
	comments,
	liked,
	disabled,
}) => {
	const navigate = useNavigate();

	const handleBoxClick = () => {
		if (!disabled) {
			navigate(`/viewDetailSsul/${postId}`);
		}
	};
	// liked 값 콘솔 출력
	console.log(`Post ID: ${postId}, Liked: ${liked}`);

	const truncatedTitle = title.length > 13 ? `${title.slice(0, 13)}...` : title;

	return (
		<S.Container disabled={disabled} onClick={handleBoxClick}>
			<S.Title disabled={disabled}>{truncatedTitle}</S.Title>
			<S.ImageContainer disabled={disabled}>
				<S.Image src={image} disabled={disabled} />
			</S.ImageContainer>
			<S.Keywords>
				{keywords.map((keyword, index) => (
					<S.Keyword key={index} disabled={disabled}>
						{keyword}
					</S.Keyword>
				))}
			</S.Keywords>
			<S.InfoContainer disabled={disabled}>
				<S.LikeContainer disabled={disabled}>
					<S.Likes disabled={disabled}>
						<img
							src={liked ? Like : DisableLike}
							alt="like Icon"
							className="Icon"
						/>
						{likes}
					</S.Likes>
					<S.Comments disabled={disabled}>
						<img
							src={disabled ? DisableComment : Comment}
							alt="comment Icon"
							className="Icon"
						/>
						{comments}
					</S.Comments>
				</S.LikeContainer>
				<S.TimeContainer disabled={disabled}>
					<img
						src={disabled ? DisableClock : Vector}
						alt="clock Icon"
						className="Icon"
					/>
					{date}
				</S.TimeContainer>
			</S.InfoContainer>
		</S.Container>
	);
};

export default Box;
