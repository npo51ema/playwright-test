import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { Root } from "./pages";
import { store } from "./store";
import "./theme/styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Root />
      </Provider>
    </BrowserRouter>
  );
}
