import React from 'react'

const Person = ({person}) => (
    <div className="card">
        <h3 className="card-title">{person.fName} {person.lName}</h3>
        <div className="card-text">
            <div className="row">
                <dt className="col-sm-3">
                    Age
                </dt>
                <dd className="col-sm-9">
                    {person.age}
                </dd>
                <dt className="col-sm-3">
                    Email
                </dt>
                <dd className="col-sm-9">
                    {person.email}
                </dd>
            </div>
        </div>
    </div>
)

export default Person;