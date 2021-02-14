import React from "react";
import { Provider } from "mobx-react";

import { Toaster } from "./Common/utils/ToastUtils";
import stores from "./Common/stores";
import Home from "./components/Home";

function App() {
	return (
		<Provider {...stores}>
			<Home />
			<Toaster />
		</Provider>
	);
}

export default App;
