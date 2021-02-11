import axios from "axios";

import { apiMethods } from "../../../Common/constants/APIConstants";
import { networkCallWithAxios } from "../../../Common/utils/APIUtils";

import {
	EditMemeRequestType,
	GetMemeResponseType,
	GetMemesResponseType,
	PostMemeRequestType,
	PostMemeResponseType
} from "../../types/DataTypes";

import { endpoints } from "../endpoints";

import { MemesService } from ".";

class MemesAPIs implements MemesService {
	api: Record<string, any>;

	constructor() {
		this.api = axios.create({
			baseURL: "https://localhost:3001/api/"
		});
	}

	postMemeAPI(requestData: PostMemeRequestType): Promise<PostMemeResponseType> {
		return networkCallWithAxios(
			this.api,
			endpoints.memes,
			requestData,
			apiMethods.post
		);
	}

	getMemesAPI(): Promise<GetMemesResponseType> {
		return networkCallWithAxios(this.api, endpoints.memes, {}, apiMethods.get);
	}

	getMemeAPI(id: string): Promise<GetMemeResponseType> {
		return networkCallWithAxios(
			this.api,
			`${endpoints.memes}${id}/`,
			{},
			apiMethods.get
		);
	}

	editMemeAPI(
		id: string,
		requestData: EditMemeRequestType
	): Promise<{ id: string }> {
		return networkCallWithAxios(
			this.api,
			`${endpoints.memes}${id}/edit/`,
			requestData,
			apiMethods.patch
		);
	}

	deleteMemeAPI(id: string): Promise<{}> {
		return networkCallWithAxios(
			this.api,
			`${endpoints.memes}${id}/delete/`,
			{},
			apiMethods.delete
		);
	}
}

export default MemesAPIs;
