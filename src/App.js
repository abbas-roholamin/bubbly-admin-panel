import { Route, Routes } from "react-router-dom";

import Articles from "./pages/articles/Articles";
import Dashboard from "./pages/dashboard/Dashboard";
import Layout from "./layout/dashboard/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="articles" element={<Articles />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
