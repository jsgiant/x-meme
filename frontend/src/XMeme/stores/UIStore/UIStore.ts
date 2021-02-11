import { action, observable } from "mobx";

import { NEW_MEME } from "../../constants/UIConstants";

import MemeModel from "../models/MemeModel";

class UIStore {
   @observable memeType!: string;
   @observable meme!: MemeModel;

   constructor() {
      this.initStore();
   }

   @action.bound
   initStore() {
      this.memeType = NEW_MEME;
      this.meme = new MemeModel({ id: "", name: "", caption: "", url: "" });
   }

   @action.bound
   updateMemeType(mode: string) {
      this.memeType = mode;
   }

   @action.bound
   updateMemeDetails(meme: MemeModel) {
      this.meme = meme;
   }

   @action.bound
   clearStore() {
      this.initStore();
   }
}

export default UIStore;
