import React, {useState} from 'react'
import {useDispatch} from "react-redux"
import {ADD_PERSON} from "../store/actionList"

const initPerson = {
    name: '',
    lastName: '',
    phone:'',
    address: '',
    email: '',
    description:''
}

const Form = () => {

    const dispatch = useDispatch()
    const [person, setPerson] = useState(initPerson)
    const changeHandle = event => {
        setPerson({...person, [event.target.name]: event.target.value})
    }

    const submitHandle = event =>{
        event.preventDefault()
        dispatch({type: ADD_PERSON, payload: {id: Date.now(), ...person}})
        setPerson(initPerson)
    }

    return (
        <section className="form">
            <div className="container">
                <div className="w-75 mx-auto py-2">
                    <form onSubmit={submitHandle}>
                        <div className="input-group mb-3">
                           <input
                                name = "name"
                                type="text"
                                className="form-control border-0"
                                placeholder="Name"
                                onChange={changeHandle}
                                value={person.name}
                            />
                            <input
                                name ="lastName"
                                type="text"
                                className="form-control border-0"
                                placeholder="surname"
                                onChange={changeHandle}
                                value={person.lastName}
                            />
                            <input
                                name = "phone"
                                type="text"
                                className="form-control border-0"
                                placeholder="Phone"
                                onChange={changeHandle}
                                value={person.phone}
                            />
                            <input
                                name ="address"
                                type="text"
                                className="form-control border-0"
                                placeholder="address"
                                onChange={changeHandle}
                                value={person.address}
                            />
                            <input
                                name = "email"
                                type="text"
                                className="form-control border-0"
                                placeholder="email"
                                onChange={changeHandle}
                                value={person.email}
                            />
                            <input
                                name = "description"
                                type="text"
                                className="form-control border-0"
                                placeholder="description"
                                onChange={changeHandle}
                                value={person.description}
                            />
                            <button
                                className="btn btn-link text-decoration-none btn-lg"
                                type="submit"
                            >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Form


//// вывод новых персон в один лист, красивый))