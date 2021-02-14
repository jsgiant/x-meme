import MemesAPIs from "../../services/MemesService/index.api";
import MemeStore from "../../stores/MemeStore";
import UIStore from "../../stores/UIStore/UIStore";

function getPostMemeAPIFixture() {
	return new MemesAPIs();
}

const memeStore = new MemeStore(getPostMemeAPIFixture());

const uiStore = new UIStore();
const stores = { memeStore, uiStore };

export default stores;
