import { useState } from "react";
import { SurveyFieldContainerStyled, SurveyFormContainerStyled } from "../../styled/survey-form/survey-form";
import Button from '@mui/material/Button'

interface FormData {
    name: string;
    surname: string;
    gender: Gender | undefined
}

type Gender = 'male' | 'female'

const SurveyForm: React.FC = () => {

    const [formData, setFormData] = useState<FormData>(
        {
            name: 'Jan',
            surname: 'Kowalski',
            gender: undefined
        }
    )
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        console.log(event)
        event.preventDefault();
    }

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(event)
        const { id, value } = event.target
        const newState = { ...formData, [id]: value }
        setFormData(newState)
    }

    return <SurveyFormContainerStyled>
        <form onSubmit={handleSubmit}>
            <SurveyFieldContainerStyled>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" value={formData.name} onChange={handleChange} />
            </SurveyFieldContainerStyled>
            <SurveyFieldContainerStyled>
                <label htmlFor="surname">Surname</label>
                <input id="surname" type="text" value={formData.surname} onChange={handleChange} />
            </SurveyFieldContainerStyled>
            <SurveyFieldContainerStyled>
                <label htmlFor="gender">Gender:</label>
                <select value={formData.gender} id="gender">
                    <option value={'male'}>Male</option>
                    <option value={'female'}>Female</option>
                </select>
            </SurveyFieldContainerStyled>
            <Button variant="contained" type="submit">Save</Button>
        </form>
    </SurveyFormContainerStyled>
}

export default SurveyForm