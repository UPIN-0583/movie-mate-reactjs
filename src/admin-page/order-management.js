import { useGetOrder } from "../api/order/useGetOrder";



const OrderManagement = () => {
    const { data: orderList, isFetching, error } = useGetOrder();


    // Handle error state
    if (error) {
        return <div className="text-red-500">Error: {error.message}</div>;
    }

    return (
        <div className="bg-white p-4 rounded-md">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-blue-500 text-xl font-semibold">Order Management</h2>
            </div>

            {/* Order Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full text-blue-500">
                    {/* Table Header */}
                    <thead className="border-b border-black">
                    <tr>
                        {/* <th className="py-2 px-4 text-left">Id</th> */}
                        <th colSpan="2" className="py-2 px-4 text-left">Order code</th>
                        <th colSpan="2" className="py-2 px-4 text-left">Order date</th>
                        <th className="py-2 px-4 text-left ">Total amount</th>
                        <th className="py-2 px-4 text-left">User name</th>
                    </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="text-black">
                    {isFetching ? (
                        <tr>
                            <td colSpan="6" className="py-2 text-center">
                                Loading...
                            </td>
                        </tr>
                    ) : (
                        orderList?.map((order, index) => (
                            <tr
                                key={order.id}
                                className="bg-white"
                            >
                                <td colSpan="2" className="py-2 px-4 border-y-2 border-black text-left">{order.order_code}</td>
                                <td colSpan="2" className="py-2 px-4 border-y-2 border-black text-left">{order.order_date}</td>
                                <td className="py-2 px-4 border-y-2 border-black text-left">{order.total_amount}</td>
                                <td className="py-2 px-4 border-y-2 border-black text-left">{order.user.name}</td>
                            </tr>
                        ))
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export { OrderManagement };
