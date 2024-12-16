import { Outlet } from "react-router-dom";
import {AdminHeader} from "../components/admin-header";
import {Sidebar} from "../components/Sidebar";
import React from "react";

const AdminLayout = () => {

    return (
        <div className="flex overflow-hidden bg-gray-900">
            <Sidebar/>
            <div className="flex flex-col flex-1">
                <div className="flex-1 bg-gray-900 text-gray-200 p-6">
                    <AdminHeader/>
                    <h1 className="text-3xl font-semibold mb-6">Leads</h1>
                    <Outlet/>
                </div>
            </div>
        </div>
    )

}

export {AdminLayout}