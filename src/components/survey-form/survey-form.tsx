import { useState } from "react";
import { SurveyFieldContainerStyled, SurveyFormContainerStyled } from "../../styled/survey-form/survey-form";
import Button from '@mui/material/Button'
import { getErrorInitialData, getFormInitialData, validationDefinition } from "./survey-form.helpers";
import { validationDefinition } from "./survey-form.helpers";

export interface FormData {
    name: string;
    surname: string;
    gender: Gender | undefined
}

export type FormErrors = {
    [T in keyof FormData]: {
        error: string
    }
}

type Gender = 'male' | 'female'

const SurveyForm: React.FC = () => {

    const [formData, setFormData] = useState<FormData>(
        getFormInitialData()
    )

    const [formErrors, setFormErrors] = useState<FormErrors>(getErrorInitialData())


    const checkFieldByValidationSchema = (fieldName: keyof FormData, value: string) => {
        const { validators } = validationDefinition[fieldName]

        for (const validator of validators) {
            const validatorResponse: string | null = validator(value)
            if (validatorResponse) {

            }
        }

    }
    const checkFiledByValidationSchema = (fieldName: keyof FormData, value: string) => {
        const { validators } = validationDefinition[fieldName]

        for (const validator of validators) {
            const validatorResponse: string | null = validator(value)
        }
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        console.log(event)
        event.preventDefault();
    }

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(event)
        const { id, value } = event.target
        // Zinterpretowanie wartosci id jako keyof FormData
        const fieldName: keyof FormData = id as keyof FormData;
        checkFieldByValidationSchema(fieldName, value)
        checkFiledByValidationSchema(id as keyof FormData, value)
        const newState = { ...formData, [fieldName]: value }
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