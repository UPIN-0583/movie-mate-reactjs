import { axiosinstance } from "../../axios/config";

// Export hàm fetchDashboardData
export const fetchDashboardData = async () => {
    const response = await axiosinstance.get("/dashboard");
    return response.data;
};
