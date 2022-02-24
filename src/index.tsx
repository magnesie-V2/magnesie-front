import { message } from "antd";
import "antd/dist/antd.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import "./index.css";

const queryClient = new QueryClient();

message.config({ top: 150, duration: 5, maxCount: 3 });

ReactDOM.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById("root")
);
