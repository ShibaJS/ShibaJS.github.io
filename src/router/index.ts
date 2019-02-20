import { RouteConfig } from "react-router-config";
import Document from "../components/Document";
import Home from "../components/Home";

export const routeConfig: RouteConfig[] = [
    {
        component: Document,
        path: "/document",
    },
    {
        component: Home,
        path: "/",
    },
];
