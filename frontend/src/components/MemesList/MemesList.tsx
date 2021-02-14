import React, { Component } from "react";
import { observer } from "mobx-react";

import MemeModel from "../../stores/models/MemeModel";
import Meme from "../Meme/Meme";

import {
	MemesListContainer,
	MemesListHeading,
	NoMemes
} from "./styledComponents";

interface MemesListProps {
	memes: Array<MemeModel>;
	deleteMemeAPI: (
		id: string,
		onSuccess: () => void,
		onFailure: () => void
	) => void;
	deleteMemeAPIError;
}

@observer
class MemesList extends Component<MemesListProps> {
	render() {
		const { memes, deleteMemeAPI, deleteMemeAPIError } = this.props;
		return (
			<MemesListContainer>
				<MemesListHeading>Memes</MemesListHeading>
				{memes.length === 0 ? (
					<NoMemes>No Memes Created Yet!</NoMemes>
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
			</MemesListContainer>
		);
	}
}

export default MemesList;
