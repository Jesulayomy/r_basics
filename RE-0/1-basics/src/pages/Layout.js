import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Layout() {
    return (
        <div className='container-fluid m-0 p-o'>
            <Navbar title="AirBmB" />
            <Outlet />
        </div>
    );
};

export default Layout;
