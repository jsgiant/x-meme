import {
   EditMemeRequestType,
   GetMemeResponseType,
   GetMemesResponseType,
   PostMemeRequestType,
   PostMemeResponseType,
} from "../../types/DataTypes";

export interface MemesService {
   postMemeAPI: (data: PostMemeRequestType) => Promise<PostMemeResponseType>;

   getMemesAPI: () => Promise<GetMemesResponseType>;

   getMemeAPI: (id: string) => Promise<GetMemeResponseType>;

   editMemeAPI: (
      id: string,
      data: EditMemeRequestType
   ) => Promise<{ id: string }>;

   deleteMemeAPI: (id: string) => Promise<{}>;
}
