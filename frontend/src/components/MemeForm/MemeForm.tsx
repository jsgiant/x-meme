import React, { Component, ReactElement } from "react";
import { observable, reaction } from "mobx";
import { inject, observer } from "mobx-react";
import cogoToast from "cogo-toast";
import { GiBeveledStar } from "react-icons/gi";

import Button from "../../Common/components/Button";
import { getParsedErrorMessage, isFetching } from "../../Common/utils/APIUtils";
import { urlRegex } from "../../Common/constants/RegexConstants";

import { EditMemeRequest, PostMemeRequest } from "../../types";
import UIStore from "../../stores/UIStore";
import { EXISTING_MEME, NEW_MEME } from "../../constants/UIConstants";
import MemeModel from "../../stores/models/MemeModel";
import {
	AddMemeForm,
	AddMemeFormContainer,
	Heading,
	Label,
	SubmitButton,
	SubmitButtonWhileLoading,
	UserInput,
	ValidationError
} from "./styledComponents";

interface MemeFormProps {
	postMemeAPI: (
		data: PostMemeRequest,
		onSuccess: () => void,
		onFailure: () => void
	) => void;
	postMemeAPIStatus: number;
	postMemeAPIError;
	editMemeAPI: (
		id: string,
		data: EditMemeRequest,
		onSuccess: () => void,
		onFailure: () => void
	) => void;
	editMemeAPIStatus: number;
	editMemeAPIError;
}

interface InjectedProps extends MemeFormProps {
	uiStore: UIStore;
}

@inject("uiStore")
@observer
class MemeForm extends Component<MemeFormProps> {
	@observable name!: string;
	@observable caption!: string;
	@observable url!: string;
	@observable errorMessage!: string;

	constructor(props) {
		super(props);
		this.init();
	}

	componentWillUnmount() {
		this.getMemeDetailsFromUIStore();
	}

	init = () => {
		this.name = "";
		this.caption = "";
		this.url = "";
		this.errorMessage = "";
	};

	get injectedProps(): InjectedProps {
		return this.props as InjectedProps;
	}

	get uiStore(): UIStore {
		const { uiStore } = this.injectedProps;
		return uiStore;
	}

	getMemeDetailsFromUIStore = reaction(
		() => {
			const { meme } = this.uiStore;
			return meme;
		},
		(meme: MemeModel) => {
			const { memeType } = this.uiStore;
			const { name, caption, url } = meme;
			if (memeType === EXISTING_MEME) {
				this.name = name;
				this.caption = caption;
				this.url = url;
			}
		}
	);

	onChangeName = (event) => {
		this.name = event.target.value;
	};

	onChangeCaption = (event) => {
		this.caption = event.target.value;
	};

	onChangeURL = (event) => {
		this.url = event.target.value;
	};

	onSuccessPostingMeme = () => {
		cogoToast.success("Meme added successfully!", {
			position: "bottom-center"
		});
		this.init();
	};

	onFailurePostingMeme = () => {
		const { postMemeAPIError } = this.props;
		this.errorMessage = getParsedErrorMessage(postMemeAPIError);
	};

	postMemeAPI = () => {
		const { postMemeAPI } = this.props;
		if (this.name && this.caption && this.url) {
			if (this.url.match(urlRegex)) {
				postMemeAPI(
					{ name: this.name, caption: this.caption, url: this.url },
					this.onSuccessPostingMeme,
					this.onFailurePostingMeme
				);
			} else {
				this.errorMessage = "Enter a valid URL!";
			}
		} else {
			this.errorMessage = "Please fill all the fields!";
		}
	};

	onSuccessEditMeme = () => {
		cogoToast.success("Meme edited successfully!", {
			position: "bottom-center"
		});
		this.changeMemeTypeToNew();
	};

	onFailureEditMeme = () => {
		const { editMemeAPIError } = this.props;
		cogoToast.error(getParsedErrorMessage(editMemeAPIError), {
			position: "bottom-center"
		});
	};

	editMemeAPI = () => {
		const { editMemeAPI } = this.props;
		const { meme } = this.uiStore;
		if (meme.caption !== this.caption || meme.url !== this.url) {
			editMemeAPI(
				meme.id,
				{ caption: this.caption, url: this.url },
				this.onSuccessEditMeme,
				this.onFailureEditMeme
			);
		} else {
			cogoToast.error("Change the details to update the meme", {
				position: "bottom-center"
			});
		}
	};

	onSubmitMeme = (event) => {
		event.preventDefault();
		const { memeType } = this.uiStore;
		if (memeType === EXISTING_MEME) {
			this.editMemeAPI();
		} else {
			this.postMemeAPI();
		}
	};

	changeMemeTypeToNew = () => {
		const { clearStore } = this.uiStore;
		this.init();
		clearStore();
	};

	render(): ReactElement {
		const { postMemeAPIStatus, editMemeAPIStatus } = this.props;
		const { memeType } = this.uiStore;
		const showButtonLoader =
			isFetching(postMemeAPIStatus) || isFetching(editMemeAPIStatus);
		return (
			<AddMemeFormContainer>
				<Heading>Add the fun</Heading>
				<AddMemeForm onSubmit={this.onSubmitMeme}>
					<Label>Name</Label>
					<UserInput
						placeholder="Enter your name"
						type="text"
						value={this.name}
						onChange={this.onChangeName}
					/>
					<Label>Caption</Label>
					<UserInput
						placeholder="Enter the caption"
						type="text"
						value={this.caption}
						onChange={this.onChangeCaption}
					/>
					<Label>Meme URL</Label>
					<UserInput
						placeholder="Enter a valid image URL"
						type="text"
						value={this.url}
						onChange={this.onChangeURL}
					/>
					<ValidationError>{this.errorMessage}</ValidationError>
					{showButtonLoader ? (
						<SubmitButtonWhileLoading></SubmitButtonWhileLoading>
					) : (
						<SubmitButton>Submit</SubmitButton>
					)}
				</AddMemeForm>
			</AddMemeFormContainer>
		);
	}
}

export default MemeForm;
