export interface PostMemeRequest {
	name: string;
	caption: string;
	url: string;
}

export interface PostMemeResponse {
	id: string;
}

export interface GetMemeResponse {
	id: string;
	name: string;
	caption: string;
	url: string;
}

export interface GetMemesResponse {
	memes: Array<GetMemeResponse>;
	total: number;
}

export interface EditMemeRequest {
	caption: string;
	url: string;
}
