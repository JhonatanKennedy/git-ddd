import { BrowserRouter, Route, Routes as RoutesDOM } from "react-router-dom";
import { availableRoutes } from "./availableRoutes";
import { Search } from "../pages/search";
import { DetailsUser } from "../pages/detailsUser";
import { DetailsRepo } from "../pages/detailsRepo";
import { About } from "../pages/about";

export const Routes = () => {
    return (
        <BrowserRouter>
            <RoutesDOM>
                <Route Component={Search} path={availableRoutes.default} />
                <Route
                    Component={DetailsUser}
                    path={availableRoutes.detailsUser}
                />
                <Route
                    Component={DetailsRepo}
                    path={availableRoutes.detailsRepo}
                />
                <Route Component={About} path={availableRoutes.about} />
            </RoutesDOM>
        </BrowserRouter>
    );
};
