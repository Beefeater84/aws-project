import {createBrowserRouter} from "react-router-dom";
import App from "../../App";
import React from "react";
import BlueTeamIndex from "../../pages/blueTeam";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/blue-team",
        element: <BlueTeamIndex />,
    }
]);