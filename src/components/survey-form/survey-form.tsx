import { useState } from "react";

interface FormData {
    name: string;
    surname: string;
    gender: Gender | undefined
}

type Gender = 'male' | 'female'

const SurveyForm: React.FC = () => {

    const [formData, setFormData] = useState<FormData>(
        {
            name: '',
            surname: '',
            gender: undefined
        }
    )
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        console.log(event)
        event.preventDefault();
    }

    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" value={formData.name} />
        </div>
        <div>
            <label htmlFor="surname">Surname</label>
            <input id="surname" type="text" value={formData.surname} />
        </div>
        <div>
            <label htmlFor="gender">Gender:</label>
            <select value={formData.gender} id="gender">
                <option value={'male'}>Male</option>
                <option value={'female'}>Female</option>
            </select>
        </div>
        <button type="submit">Save</button>
    </form>
}

export default SurveyForm