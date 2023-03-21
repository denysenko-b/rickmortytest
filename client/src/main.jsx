import React from "react";
import ReactDOM from "react-dom/client";

import "./reset.scss";
import "./index.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import CharacterProfile, {
    loader as characterInfoPageLoader,
} from "./routes/CharacterProfile";
import CharactersList from "./routes/CharactersList";
import UserProfile from './routes/UserProfile';

import ErrorPage from "./routes/ErrorPage";

import { store } from "./redux/store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <CharactersList />,
            },
            {
                path: "/characters/:id",
                element: <CharacterProfile />,
                loader: characterInfoPageLoader,
            },
            {
                path: "/profile",
                element: <UserProfile />
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
