import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "../pages/Home";
import { Category } from "../pages/Category";
import { Search } from "../pages/Search";
import { Error } from "../pages/Error";

export const AppRouter = () => (
  <Routes>
    <Route path={routes.home} element={<Home />} />
    <Route path={routes.category} element={<Category />} />
    <Route path={routes.search} element={<Search />} />
    <Route path={routes.notFound} element={<Error />} />
  </Routes>
);
