import MemesAPIs from "../../services/MemesService/index.api";
import MemesFixtures from "../../services/MemesService/index.fixture";
import MemeStore from "../../stores/MemeStore";
import UIStore from "../../stores/UIStore/UIStore";

const useFixtures = false;

function getPostMemeAPIFixture() {
	if (useFixtures) {
		return new MemesFixtures();
	}
	return new MemesAPIs();
}

const memeStore = new MemeStore(getPostMemeAPIFixture());

const uiStore = new UIStore();
const stores = { memeStore, uiStore };

export default stores;
