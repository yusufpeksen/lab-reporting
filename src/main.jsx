import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LaborantPage from "./pages/LaborantPage";
import './index.css'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./app/store";
import { MantineProvider } from "@mantine/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@mantine/core/styles.css";
import ReportPage from "./pages/ReportPage";
import ReportListPage from "./pages/ReportListPage";
import LaborantListPage from "./pages/LaborantListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/addlaborant",
    element: <LaborantPage />,
  },
  {
    path: "/addreport",
    element: <ReportPage />,
  },
  {
    path: "/reports",
    element: <ReportListPage />,
  },
  {
    path: "/laborants",
    element: <LaborantListPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <RouterProvider router={router} />
        </MantineProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
