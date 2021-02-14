import React, { Component, ReactNode } from "react";
import { inject, observer } from "mobx-react";
import Loader from "react-loader-spinner";

import {
	getParsedErrorMessage,
	isFailed,
	isFetching
} from "../../Common/utils/APIUtils";

import MemeStore from "../../stores/MemeStore";

import Header from "../Header";
import MemeForm from "../MemeForm";
import MemesList from "../MemesList";

import {
	HomeContainer,
	FormAndMemesContainer,
	GetMemesErrorMessage,
	TryAgainButton,
	MemesContainer
} from "./styledComponents";

interface HomeProps {}

interface InjectedProps extends HomeProps {
	memeStore: MemeStore;
}

@inject("memeStore")
@observer
class Home extends Component<HomeProps> {
	componentDidMount() {
		this.getMemes();
	}

	get injectedProps(): InjectedProps {
		return this.props as InjectedProps;
	}

	get memeStore(): MemeStore {
		const { memeStore } = this.injectedProps;
		return memeStore;
	}

	getMemes = (): void => {
		this.memeStore.getMemesAPI();
	};

	renderMemes = (): ReactNode => {
		const {
			getMemesAPIStatus,
			getMemesAPIError,
			memes,
			deleteMemeAPI,
			deleteMemeAPIError
		} = this.memeStore;
		if (isFetching(getMemesAPIStatus)) {
			return (
				<MemesContainer>
					<Loader type="TailSpin" color="#0b69ff" height={50} width={50} />
				</MemesContainer>
			);
		}
		if (isFailed(getMemesAPIStatus)) {
			return (
				<MemesContainer>
					<GetMemesErrorMessage>
						{getParsedErrorMessage(getMemesAPIError)}
					</GetMemesErrorMessage>
					<TryAgainButton onClick={this.getMemes}>Try Again</TryAgainButton>
				</MemesContainer>
			);
		}
		return (
			<MemesList
				memes={memes}
				deleteMemeAPI={deleteMemeAPI}
				deleteMemeAPIError={deleteMemeAPIError}
			/>
		);
	};

	render() {
		return (
			<HomeContainer>
				<Header />
				<FormAndMemesContainer>
					<MemeForm
						postMemeAPI={this.memeStore.postMemeAPI}
						postMemeAPIStatus={this.memeStore.postMemeAPIStatus}
						postMemeAPIError={this.memeStore.postMemeAPIError}
						editMemeAPI={this.memeStore.editMemeAPI}
						editMemeAPIStatus={this.memeStore.editMemeAPIStatus}
						editMemeAPIError={this.memeStore.editMemeAPIError}
					/>
					{this.renderMemes()}
				</FormAndMemesContainer>
			</HomeContainer>
		);
	}
}

export default Home;
