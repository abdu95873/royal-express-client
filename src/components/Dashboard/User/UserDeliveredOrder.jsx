import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { useQuery } from 'react-query';


const UserDeliveredOrder = () => {
    const { user } = useContext(AuthContext);

    const { data: allOrders = [], refetch } = useQuery({
        queryKey: ['allOrders'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/orders?email=${user?.email}`);
            const data = await res.json();
            return data;
        },
    });

    useEffect(() => {
        refetch();
    }, [user]);

    // Filter orders by status "Order Placed"
    const orderPlacedOrders = allOrders.filter((order) => order.status === 'Delivered');

    return (
        <div className='w-full'>
            <div className='pt-24'>
                <section>
                    <header className='text-4xl font-bold text-center'>Delivered Order</header>
                    <div className='divider'></div>
                </section>
                <div className='md:grid-cols-3 justify-between my-8 '>
                    <div>
                        <table className='table'>
                            <thead>
                                <tr className='font-bold text-2xl bg-slate-300'>
                                    <th>#</th>
                                    <th>From</th>
                                    <th>To</th>
                                    <th>Date</th>
                                    <th>Weight</th>
                                    <th>Charge</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderPlacedOrders.map((order, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{order.fromName}</td>
                                        <td>{order.toName}</td>
                                        <td>{order.date}</td>
                                        <td>{0 + order.kg} KG</td>
                                        <td>{order.price}</td>
                                        <td>{order.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default UserDeliveredOrder;