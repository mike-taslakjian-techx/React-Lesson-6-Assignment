import { createBrowserRouter } from "react-router";
import { Form } from "./components/Form/Form";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Layout } from "./assets/Layout";
import { FriendsList } from "./components/FriendsList/FriendsList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Form />
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: "/friends",
                element: <FriendsList />
            }
        ]
    },
    {
        path: "*",
        element: <p>ERROR</p>
    }
]);

export { router };