import { Outlet } from "react-router-dom";

const UserView: React.FC = () => {
    return <>
        <header>User Header</header>
            <Outlet />
        <footer>User Footer</footer>
    </>
}

export default UserView;