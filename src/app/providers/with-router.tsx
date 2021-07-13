import React, {ReactNode, Suspense} from "react";
import { BrowserRouter } from "react-router-dom";
import {Loader} from "../../components/Loader";

type Component = () => ReactNode
export const withRouter = (component: Component) => () => (
    <BrowserRouter>
        <Suspense fallback={<Loader />}>
            {component()}
        </Suspense>
    </BrowserRouter>
);
