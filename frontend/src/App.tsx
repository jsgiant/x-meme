import React from "react";
import { Provider } from "mobx-react";

import stores from "./Common/stores";
import Home from "./components/Home";

function App() {
	return (
		<Provider {...stores}>
			<Home />
		</Provider>
	);
}

export default App;
