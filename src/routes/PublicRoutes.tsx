import { AppLayout } from "components";
import { Outlet } from "react-router-dom";

const PublicRoutes = () => {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};

export default PublicRoutes;
