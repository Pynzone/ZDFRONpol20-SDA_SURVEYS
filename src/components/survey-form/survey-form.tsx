import { useState } from "react";
import { SurveyFieldContainerStyled, SurveyFieldError, SurveyFormContainerStyled } from "../../styled/survey-form/survey-form";
import Button from '@mui/material/Button'
import { getErrorInitialData, getFormInitialData, validationDefinition } from "./survey-form.helpers";
//import { validationDefinition } from "./survey-form.helpers";

export interface FormData {
    name: string;
    surname: string;
    gender: Gender
}

export type FormErrors = {
    [T in keyof FormData]: {
        error: string | null
    }
}

type Gender = 'male' | 'female'

const SurveyForm: React.FC = () => {

    const [formData, setFormData] = useState<FormData>(
        getFormInitialData()
    )

    const [formErrors, setFormErrors] = useState<FormErrors>(getErrorInitialData())

    const checkFieldByValidationSchema = (fieldName: keyof FormData, value: string): boolean => {
        const { validators } = validationDefinition[fieldName]

        // Zakładamy że field jest zwalidowany poprawnie
        let isFieldValid: boolean = true;

        // Przechodzimy przez wszystkie walidatory
        for (const validator of validators) {
            // Odpalamy konkretny walidator
            const validatorResponse: string | null = validator(value)
            // Sprawdzamy czy validator zwrócił bład walidacji
            if (validatorResponse) {
                // Ustawiamy bład walidacji dla danego fieldu
                setFormErrors(prevFormErrors => {
                    return ({
                        ...prevFormErrors, [fieldName]: {
                            error: validatorResponse
                        }
                    })
                })
                // Wnioskujemy że wartosc w fieldzie nie jest poprawna
                // Ustawiamy wartosc flagi isFieldValid na false
                isFieldValid = false;

                //Przerywamy sprawdzanie kolejnych walidatorów
                break;
            }
        }

        // Sprawdzamy czy nasze załozenie było poprawne
        // Tj czy okazało się że nie było błedów walidacyjnych
        // Które zmieniłyby wartosc flagi isFieldValid na false
        if (isFieldValid) {
            // To oznacza ze nie ma błedów i możemy usunąć wczesniejsze błedy z danego fieldu
            setFormErrors(prevState => ({
                ...prevState, [fieldName]: {
                    error: null
                }
            }))
        }

        return isFieldValid;

    }
    const checkFiledByValidationSchema = (fieldName: keyof FormData, value: string) => {
        const { validators } = validationDefinition[fieldName]

        for (const validator of validators) {
            const validatorResponse: string | null = validator(value)
        }
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        // Wyciagniecie kluczy z obiektu formData
        const keys = Object.keys(formData);

        // Zakładamy że wszystkie fieldy sa poprawne
        let isAllFieldValid: boolean = true

        // Dla kazdego z kluczy....
        keys.forEach(key => {
            // Odpalenie mechanizmu walidacyjnego
            const currentField = key as keyof FormData;
            const isFieldValid = checkFieldByValidationSchema(currentField, formData[currentField])

            // Jeśli dalej formularz jest wg nas poprawny ale konkretny
            // field nie jest to ustaw ze cały formularz jest niepoprawny
            if (isAllFieldValid && !isFieldValid) {
                isAllFieldValid = false;
            }
        })

        if (!isAllFieldValid) {
            console.log('Błedne dane')
            return;
        }


        console.log('Dane poprawne')
        // Zapisywanie danych do bazy
    }

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(event)
        //debugger;
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
                {Boolean(formErrors.name.error) && <SurveyFieldError>{formErrors.name.error}</SurveyFieldError>}
            </SurveyFieldContainerStyled>
            <SurveyFieldContainerStyled>
                <label htmlFor="surname">Surname</label>
                <input id="surname" type="text" value={formData.surname} onChange={handleChange} />
                {Boolean(formErrors.surname.error) && <SurveyFieldError>{formErrors.surname.error}</SurveyFieldError>}
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