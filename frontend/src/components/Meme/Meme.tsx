import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import { getParsedErrorMessage } from "../../Common/utils/APIUtils";
import {
	showErrorMessage,
	showSuccessMessage
} from "../../Common/utils/ToastUtils";

import MemeModel from "../../stores/models/MemeModel";
import UIStore from "../../stores/UIStore";
import { EXISTING_MEME } from "../../constants/UIConstants";

import {
	DeleteButton,
	MemeCaption,
	MemeContainer,
	MemeImage,
	MemeImageContainer,
	MemeOptionsContainer,
	MemeCreatorName,
	MemeSubTitle,
	MemeTitle,
	UpdateButton
} from "./styledComponents";

interface MemeProps {
	meme: MemeModel;
	deleteMemeAPI: (
		id: string,
		onSuccess: () => void,
		onFailure: () => void
	) => void;
	deleteMemeAPIError;
}

interface InjectedProps extends MemeProps {
	uiStore: UIStore;
}

@inject("uiStore")
@observer
class Meme extends Component<MemeProps> {
	get injectedProps(): InjectedProps {
		return this.props as InjectedProps;
	}

	get uiStore(): UIStore {
		const { uiStore } = this.injectedProps;
		return uiStore;
	}

	editMeme = () => {
		const { meme } = this.props;
		const { updateMemeType, updateMemeDetails } = this.uiStore;
		updateMemeType(EXISTING_MEME);
		updateMemeDetails(meme);
	};

	onSuccessDeleteMeme = () => {
		showSuccessMessage("Meme deleted successfully!");
	};

	onFailureDeleteMeme = () => {
		const { deleteMemeAPIError } = this.props;
		showErrorMessage(getParsedErrorMessage(deleteMemeAPIError));
	};

	deleteMemeAPI = () => {
		const {
			deleteMemeAPI,
			meme: { id }
		} = this.props;
		deleteMemeAPI(id, this.onSuccessDeleteMeme, this.onFailureDeleteMeme);
	};

	render() {
		const {
			meme: { name, caption, url }
		} = this.props;
		return (
			<MemeContainer>
				<MemeTitle>
					<MemeCreatorName>{name}</MemeCreatorName>
				</MemeTitle>
				<MemeSubTitle>
					<MemeCaption>{caption}</MemeCaption>
					<MemeOptionsContainer>
						<UpdateButton onClick={this.editMeme}>Update</UpdateButton>
						<DeleteButton onClick={this.deleteMemeAPI}>Delete</DeleteButton>
					</MemeOptionsContainer>
				</MemeSubTitle>
				<MemeImageContainer>
					<MemeImage alt={caption} src={url} />
				</MemeImageContainer>
			</MemeContainer>
		);
	}
}

export default Meme;
