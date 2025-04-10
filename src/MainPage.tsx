import React from "react";
import { useRemote } from "./useRemote";

export const MainPage = () => {
    const RemoteComponent = useRemote('app2', 'RemoteComponent');

    return (
        <div>
            <h1>Страница с RemoteComponent</h1>
            <React.Suspense fallback={<div>Загрузка RemoteComponent...</div>}>
                <RemoteComponent name="Гойда" />
            </React.Suspense>
        </div>
    );
};
