import ReactDOM from "react-dom/client";
import "@/assets/css/app.css";
import "react-toastify/dist/ReactToastify.css";

import App from "@/App";
import { Provider } from "react-redux";
import store from "@/app/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
