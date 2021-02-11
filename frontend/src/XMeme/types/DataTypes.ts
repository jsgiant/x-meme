export interface PostMemeRequestType {
   name: string;
   caption: string;
   url: string;
}

export interface PostMemeResponseType {
   id: string;
}

export interface GetMemeResponseType {
   id: string;
   name: string;
   caption: string;
   url: string;
}

export interface GetMemesResponseType {
   memes: Array<GetMemeResponseType>;
   total_memes: number;
}

export interface EditMemeRequestType {
   caption: string;
   url: string;
}
