import { Suspense } from "react";
import { message } from "antd";
import { QueryProvider } from "Providers";
import { AppRoutes } from "routes";
import { FallbackUI } from "components";
// import "./App.css";

message.config({
  top: 80,
});

const App = () => {
  return (
    <QueryProvider>
      <Suspense fallback={<FallbackUI />}>
        <AppRoutes />
      </Suspense>
    </QueryProvider>
  );
};

export default App;
