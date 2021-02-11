import React from "react";
import { Provider } from "mobx-react";

import stores from "./Common/stores";
import XMemeHome from "./XMeme/components/XMemeHome";

function App() {
   return (
      <Provider {...stores}>
         <XMemeHome />
      </Provider>
   );
}

export default App;
