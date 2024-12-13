import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AppLayout as CloudscapeAppLayout, BreadcrumbGroup } from "@cloudscape-design/components";
import "@cloudscape-design/global-styles/index.css";
import Home from "../Home";
import TopNavigationComponent from "./TopNavigationComponent";
import Navigations from "./Navigations";

export default function MyAppLayout() {
    const [isNavigationOpen, setIsNavigationOpen] = useState(true);
    const [isToolsHidden, setIsToolsHidden] = useState(true);
    const [contentHeader, setContentHeader] = useState(null);


    const location = useLocation();

    const getBreadcrumbItems = () => {
        switch (location.pathname) {
            case "/Home":
                return [
                    { text: 'Home', href: '/' },
                    { text: 'Home', href: '/Home' },
                ];
            default:
                return [{ text: 'Home', href: '/' }];
        }
    };

    return (
        <>
            <CloudscapeAppLayout
                navigationOpen={isNavigationOpen}
                toolsHide={isToolsHidden}
                onNavigationChange={() => setIsNavigationOpen(!isNavigationOpen)}
                onToolsChange={() => setIsToolsHidden(!isToolsHidden)}
                navigation={
                    <Navigations
                        header={{ href: '/Home', text: 'Welcome' }}
                        items={[{ type: 'link', text: 'Home', href: '/Home' }]}
                    />
                }
                content={
                    <>
                        <BreadcrumbGroup items={getBreadcrumbItems()} />
                        <Routes>
                            <Route path="/Home" element={<Home setContentHeader={setContentHeader} />} />
                            {/* Add other routes here */}
                        </Routes>
                    </>
                }
            />
        </>

    );
}
