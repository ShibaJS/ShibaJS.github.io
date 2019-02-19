import { RouteConfig } from "react-router-config";
import Home from "../components/Home";
import Root from "../components/Root";

export const routeConfig: RouteConfig[] = [
    {
        component: Home,
        path: "/",
        // indexRoute: { component: Dashboard },
        // childRoutes: [
        //     { path: 'about', component: About },
        //     { path: 'inbox',
        //         component: Inbox,
        //         childRoutes: [
        //             { path: '/messages/:id', component: Message },
        //             { path: 'messages/:id',
        //                 onEnter: function (nextState, replaceState) {
        //                     replaceState(null, '/messages/' + nextState.params.id)
        //                 }
        //             }
        //         ]
        //     }
        // ]
    },
];
