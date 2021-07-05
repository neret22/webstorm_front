import React, {useState} from "react"
import {useForm} from 'react-cool-form'
import TextField from "./TextField";
import Person from "./Person";

const App = () => {

    const [person, setPerson] = useState(null)

    const {form, use} = useForm(
        {
            defaultValues: {
                fName: '',
                lName: '',
                age: '',
                email: ''
            },
            onSubmit: (values, {reset}) => {
                submitHandle(values)
                reset()
            }
        })

    const errors = use("errors", {errorWithTouched: true})
    const submitHandle = values => {
        console.log(values)
        setPerson(values)
    }

    const renderPerson = () => {
        if (person) {
            return (
                <div className="mt-5">
                    <Person person={person}/>
                </div>
            )
        }
        return null
    }
    return (
        <div className="w-50 mx-auto">
            <div className="card-p-5">
                <div className="card-text">
                    <form ref={form} noValidate>
                        <TextField
                            label="First Name"
                            id="fName"
                            name="fName"
                            required
                            error={errors.fName}/>
                        <TextField
                            label="Last Name"
                            id="lName"
                            name="lName"
                            required
                            error={errors.lName}/>

                        <TextField
                            label="Age"
                            id="age"
                            name="age"
                            required
                            maxLength="2"
                            error={errors.age}/>

                        <TextField
                            label="email"
                            id="email"
                            name="email"
                            required
                            error={errors.email}
                        />
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-3">Add Person</button>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                {renderPerson()}
            </div>
        </div>

    )
}

export default App