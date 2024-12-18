import { axiosinstance } from "../../axios/config";

export const fetchDashboardData = async () => {
    const response = await axiosinstance.get("/dashboard");
    return response.data;
};