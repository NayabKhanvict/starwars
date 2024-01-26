import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { People } from "pages";
import PublicRoutes from "./PublicRoutes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="*" element={<Navigate to="/people" />} />
          <Route path="/people" element={<People />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
