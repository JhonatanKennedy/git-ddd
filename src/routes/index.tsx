import { BrowserRouter, Route, Routes as RoutesDOM } from "react-router-dom";
import { availableRoutes } from "./availableRoutes";
import { Home } from "../pages/home";
import { About } from "../pages/about";

export const Routes = () => {
    return (
        <BrowserRouter>
            <RoutesDOM>
                <Route Component={Home} path={availableRoutes.default} />
                <Route Component={About} path={availableRoutes.about} />
            </RoutesDOM>
        </BrowserRouter>
    );
};
