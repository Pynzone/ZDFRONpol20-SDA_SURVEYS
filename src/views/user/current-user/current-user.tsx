import { useParams } from "react-router-dom"

const CurrentUserView: React.FC = () => {
    const params = useParams()
    console.log('Params from CurrentUserView', params)
    return <>Hello from CurrentUserView</>
  }

export default CurrentUserView;