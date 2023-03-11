import { Container } from "@mui/material"
import { Outlet } from "react-router-dom"
import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"

const MainView: React.FC = () => {
    return <>
        <Header />
        <Container>
            <Outlet />
        </Container>
        <Footer />
    </>
}

export default MainView