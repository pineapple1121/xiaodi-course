import {createRoot} from 'react-dom/client'
import "./index.less"
import {RouterProvider} from "react-router-dom";
import {router} from "./routes";
import React from 'react';

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)
