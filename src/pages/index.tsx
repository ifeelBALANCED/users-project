import React, { Suspense } from "react";
import {Route, Switch} from "react-router-dom";
import {routes} from "../routes";
import {Loader} from "../components/Loader";


export const Routing = () => {
    return (
        <Switch>
            <Suspense fallback={<Loader/>}>
                {routes.map(
                    (route, key) => (
                        <Route
                            key={key}
                            {...route}
                        />
                    ))}
            </Suspense>
        </Switch>
    );
};
