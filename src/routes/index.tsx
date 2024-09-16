import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {Index} from "../pages";
import {CourseCenter} from "../pages/CourseCenter.tsx";
import {Super} from "../pages/Super.tsx";

export const router = createBrowserRouter([{
    path: "/",
    element: <App/>,
    children: [
        {
            index: true,
            element: <Index/>,
        },
        {
            path: "center",
            element: <CourseCenter/>,
        }, {
            path: "svip",
            element: <Super/>,
        }
    ]
}

])