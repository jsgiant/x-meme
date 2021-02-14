import {
	EditMemeRequest,
	GetMemeResponse,
	GetMemesResponse,
	PostMemeRequest,
	PostMemeResponse
} from "../../types";

export interface MemesService {
	getMemesAPI: () => Promise<GetMemesResponse>;

	postMemeAPI: (data: PostMemeRequest) => Promise<PostMemeResponse>;

	getMemeAPI: (id: string) => Promise<GetMemeResponse>;

	editMemeAPI: (id: string, data: EditMemeRequest) => Promise<{ id: string }>;

	deleteMemeAPI: (id: string) => Promise<{}>;
}
