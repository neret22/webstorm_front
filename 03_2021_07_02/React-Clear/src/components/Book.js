import React from 'react';
import {useSelector} from 'react-redux'


const Info = () => {

    const list = useSelector(state => state.list)

    const renderPersons = () => {
        if (list.length === 0) {
            return (
                <li className="d-flex justify-content-sm-between">No one here yet...</li>
            )
        }
        return list.map((person, idx) => {
            return (
                <li key={person.id}>Person #{idx+1} {person.name} {person.lastName}</li>
            )
        })



    }

        return (
            <section className="list my-5">
                <div className="container">
                    <div className="w-75 mx-auto">
                        <div className="d-flex justify-content-sm-between">
                            <div className="list-header">Name</div>
                            <div className="list-header">Last Name</div>
                            <div className="list-header">Phone</div>
                            <div className="list-header">E-mail</div>
                            <div className="list-header">Address</div>
                            <div className="list-header">Description</div>
                        </div>
                        <hr/>
                        <ul>
                            {renderPersons()}
                        </ul>
                    </div>
                </div>
            </section>
        );
    }

export default Info;

