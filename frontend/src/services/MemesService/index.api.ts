import axios from "axios";

import { apiMethods } from "../../Common/constants/APIConstants";
import { networkCallWithAxios } from "../../Common/utils/APIUtils";
import {
	EditMemeRequest,
	GetMemeResponse,
	GetMemesResponse,
	PostMemeRequest,
	PostMemeResponse
} from "../../types";

import { endpoints } from "../endpoints";

import { MemesService } from ".";

class MemesAPIs implements MemesService {
	api: Record<string, any>;

	constructor() {
		this.api = axios.create({
			baseURL: "https://localhost:3001/api/"
		});
	}

	getMemesAPI(): Promise<GetMemesResponse> {
		return networkCallWithAxios(this.api, endpoints.memes, {}, apiMethods.get);
	}

	postMemeAPI(requestData: PostMemeRequest): Promise<PostMemeResponse> {
		return networkCallWithAxios(
			this.api,
			endpoints.memes,
			requestData,
			apiMethods.post
		);
	}

	getMemeAPI(id: string): Promise<GetMemeResponse> {
		return networkCallWithAxios(
			this.api,
			`${endpoints.memes}${id}/`,
			{},
			apiMethods.get
		);
	}

	editMemeAPI(
		id: string,
		requestData: EditMemeRequest
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
