import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

// import notFoundLogo from "../../../assets/img/404.svg";

import MemeModel from "../../stores/models/MemeModel";
import UIStore from "../../stores/UIStore";
import { EXISTING_MEME } from "../../constants/UIConstants";

import {
	DeleteButton,
	EditButton,
	MemeCaption,
	MemeContainer,
	MemeImage,
	MemeImageContainer,
	MemeOptionsContainer,
	MemeCreatorName,
	MemeSubTitleBar,
	MemeTitleBar,
	UpdateButton
} from "./styledComponents";
import { getParsedErrorMessage, isFetching } from "../../Common/utils/APIUtils";
import cogoToast from "cogo-toast";

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
		cogoToast.success("Meme deleted successfully!", {
			position: "bottom-center"
		});
	};

	onFailureDeleteMeme = () => {
		const { deleteMemeAPIError } = this.props;
		cogoToast.error(getParsedErrorMessage(deleteMemeAPIError), {
			position: "bottom-center"
		});
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
			meme: { name, caption, url, deleteAPIStatus }
		} = this.props;
		const showLoader = isFetching(deleteAPIStatus);
		return (
			<MemeContainer>
				<MemeTitleBar>
					<MemeCreatorName>{name}</MemeCreatorName>
				</MemeTitleBar>
				<MemeSubTitleBar>
					<MemeCaption>{caption}</MemeCaption>
					<MemeOptionsContainer>
						<UpdateButton onClick={this.editMeme}>Update</UpdateButton>
						<DeleteButton onClick={this.deleteMemeAPI}>Delete</DeleteButton>
					</MemeOptionsContainer>
				</MemeSubTitleBar>
				<MemeImageContainer>
					<MemeImage alt={caption} src={url} />
				</MemeImageContainer>
			</MemeContainer>
		);
	}
}

export default Meme;
