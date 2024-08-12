import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AppLayout as CloudscapeAppLayout, BreadcrumbGroup } from "@cloudscape-design/components";
import Home from "../Home";
import Navigations from "./Navigations";
import UploadCVCreateForm from "../../ui-components/UploadCVCreateForm";

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
                    { text: 'Upload your CV', href: '/ui-components/UploadCVCreateForm' },

                ];
            default:
                return [{ text: 'Home', href: '/' }];
        }
    };

    return (
        <CloudscapeAppLayout
            navigationOpen={isNavigationOpen}
            toolsHide={isToolsHidden}
            onNavigationChange={() => setIsNavigationOpen(!isNavigationOpen)}
            onToolsChange={() => setIsToolsHidden(!isToolsHidden)}
            navigation={
                <Navigations
                    header={{ href: '/Home', text: 'Welcome' }}
                    items={[
                        { type: 'link', text: 'Home', href: '/Home' },
                        { type: 'link', text: 'Upload your CV', href: '/ui-components/UploadCVCreateForm' },

                    ]}
                />
            }
            content={
                <>
                    <BreadcrumbGroup items={getBreadcrumbItems()} />
                    <Routes>
                        <Route path="/Home" element={<Home setContentHeader={setContentHeader} />} />
                        <Route path="/ui-components/UploadCVCreateForm" element={<UploadCVCreateForm />} />

                    </Routes>
                </>
            }
        />
    );
}
