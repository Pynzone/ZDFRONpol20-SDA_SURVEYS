import { Outlet } from "react-router-dom"
import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"

const MainView: React.FC = () => {
    return <>
        <Header />
        <Outlet />
        <Footer />
    </>
}

export default MainView