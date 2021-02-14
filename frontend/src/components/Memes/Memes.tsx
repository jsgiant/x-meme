import React, { Component } from "react";
import { observer } from "mobx-react";

import MemeModel from "../../stores/models/MemeModel";
import Meme from "../Meme/Meme";

import {
	MemesContainer,
	MemesHeading,
	NoMemesMessage
} from "./styledComponents";

interface MemesProps {
	memes: Array<MemeModel>;
	deleteMemeAPI: (
		id: string,
		onSuccess: () => void,
		onFailure: () => void
	) => void;
	deleteMemeAPIError;
}

@observer
class Memes extends Component<MemesProps> {
	render() {
		const { memes, deleteMemeAPI, deleteMemeAPIError } = this.props;
		return (
			<MemesContainer>
				<MemesHeading>Memes</MemesHeading>
				{memes.length === 0 ? (
					<NoMemesMessage>No Memes &#128533;</NoMemesMessage>
				) : (
					memes.map((meme) => (
						<Meme
							key={meme.id}
							meme={meme}
							deleteMemeAPI={deleteMemeAPI}
							deleteMemeAPIError={deleteMemeAPIError}
						/>
					))
				)}
			</MemesContainer>
		);
	}
}

export default Memes;
