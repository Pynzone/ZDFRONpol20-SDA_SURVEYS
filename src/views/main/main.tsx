import { Outlet } from "react-router-dom"

const MainView: React.FC = () => {
    return <>
        <header>Header</header>
        <Outlet />
        <footer>Footer</footer>
    </>
}

export default MainView