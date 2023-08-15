import React, { useContext, useEffect } from 'react';
import AdminHome from '../components/Dashboard/Admin/adminHome';
import { AuthContext } from '../providers/AuthProvider';
import { useQuery } from 'react-query';
import { NavLink, Navigate, Outlet, useNavigate } from 'react-router-dom';
import {  FaWallet, FaHome, FaUsers, FaWarehouse, FaTruckPickup, FaBoxes } from 'react-icons/fa';
import { animated, useSpring } from '@react-spring/web';
import { BrowserRouter as Router } from 'react-router-dom';
import img from '../assets/courier ui/ROYAL EXPRESS.png'
import NavBar from '../components/Shared/NavBar';
import NavBarDashboard from '../components/Shared/NavBarDashboard';




const Dashboard = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const AnimatedFaHome = animated(FaHome);
    const AnimatedFaWallet = animated(FaWallet);
    const AnimatedFaUsers = animated(FaUsers);
    const AnimatedFaTruckPickup = animated(FaTruckPickup);
    const AnimatedFaWarehouse = animated(FaWarehouse);
    const AnimatedFaBoxes = animated(FaBoxes);


    const iconAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(-30px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        delay: 200,
    });

    const { data: loggedUser = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    useEffect(() => {
        refetch()
    }, [user])
    const isEmployees = loggedUser[0]?.role == 'employees';
    const isAdmin = loggedUser[0]?.role == 'admin';
    const isUser = loggedUser[0]?.role == 'user';
    // if (isAdmin) {
    //     navigate("/dashboard/admin/Home")
    // }
    // if (isEmployees) {
    //     navigate("/dashboard/employees/Home")
    // }
    // if (isUser) {
    //     navigate("/dashboard/user/Home")
    // }

    return (
        <div>
            <NavBarDashboard></NavBarDashboard>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* <img className='opacity-50 ms-64'  src={img} alt="" /> */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content pt-48 text-xl">
                        {/* Sidebar content here */}



                        {isAdmin ? <>
                            <li> <NavLink to="/dashboard/admin/Home"><AnimatedFaHome style={iconAnimation} /> Admin Home</NavLink></li>

                            <li><NavLink to="/dashboard/admin/PickupRequests"> <AnimatedFaTruckPickup style={iconAnimation} /> Pickup Request</NavLink></li>
                            <li><NavLink to="/dashboard/admin/AssignedForPickups"><AnimatedFaUsers style={iconAnimation} /> Assigned For Pickups</NavLink></li>
                            <li><NavLink to="/dashboard/admin/CollectedOrders"> <AnimatedFaWarehouse style={iconAnimation} /> Collected Orders</NavLink></li>
                            <li><NavLink to="/dashboard/admin/AssignedForDeliveries"><AnimatedFaTruckPickup style={iconAnimation} /> Assigned For Deliveries</NavLink></li>
                            <li> <NavLink to="/dashboard/admin/DeliveredOrders"><AnimatedFaBoxes style={iconAnimation} /> Delivered Orders</NavLink></li>
                            <li> <NavLink to="/dashboard/admin/ManageUsers"><AnimatedFaUsers style={iconAnimation} /> Manage Users</NavLink></li>
                        </> : <></>}


                        {isEmployees ? <>
                            <li><NavLink to="/dashboard/employees/EmployeesHome"><AnimatedFaHome style={iconAnimation} /> Employees Home</NavLink></li>
                            <li><NavLink to="/dashboard/employees/AssignedForPickups"><AnimatedFaTruckPickup style={iconAnimation} /> Assigned For Pickups</NavLink></li>
                            <li><NavLink to="/dashboard/employees/Picked"><AnimatedFaWarehouse style={iconAnimation} /> Picked</NavLink></li>
                            <li><NavLink to="/dashboard/employees/AssignedForDeliveries"><AnimatedFaTruckPickup style={iconAnimation} /> Assigned For Deliveries</NavLink></li>
                            <li><NavLink to="/dashboard/employees/Delivered"> <AnimatedFaBoxes style={iconAnimation} /> Delivered</NavLink></li>
                        </> : <></>}

                        {isUser ? <>
                            <li ><NavLink  to="/dashboard/user/Home" ><AnimatedFaHome style={iconAnimation} /> User Home</NavLink></li>
                            <li><NavLink  to="/dashboard/user/UserSendPickupRequest"><AnimatedFaTruckPickup style={iconAnimation} /> Send Pickup Request</NavLink></li>
                            <li><NavLink  to="/dashboard/user/UserDuePayment"><AnimatedFaWallet style={iconAnimation} /> Make Payment</NavLink></li>
                            <li><NavLink  to="/dashboard/user/UserMyRequests"><AnimatedFaTruckPickup style={iconAnimation} /> My Requests</NavLink></li>
                            <li><NavLink  to="/dashboard/user/UserDeliveredOrders"><AnimatedFaBoxes style={iconAnimation} /> Delivered Order</NavLink></li>
                           
                        </> : <></>}
                        <div className="divider"></div>
                       
                    </ul>

                </div>
            </div>

        </div>

    );
};

export default Dashboard;