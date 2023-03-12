import { FormData } from "../../components/survey-form/survey-form"


const apiServiceDef = () => {
    // Link do naszego api
    const baseUrl = 'http://localhost:3001'

    // Metoda wysyłająca dane na serwer
    const createSurvey = async (survey: FormData): Promise<void> => {
        try {
            await fetch(`${baseUrl}/survey`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(survey)
            })
        } catch (error) {
            console.log(error)
        }
    }

    // Rejestr dostpnych w serwisie metod
    return {
        createSurvey
    }
}

export const apiService = apiServiceDef()