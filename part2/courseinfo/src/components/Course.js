import React from 'react';

const Course = ({courses}) => {
    let keyIndex = 0;

    return (
        <div>
            {courses.map((course) => {
                keyIndex++;
                return (
                    <div key={keyIndex}>
                        <Header text={course.name} />
                        <Content parts={course.parts} />
                    </div>
                )
            })}
        </div>
    )
}

const Header = (props) => {
    return (
        <h2>{props.text}</h2>
    )
}

const Content = ({parts}) => {
    const total = parts.reduce( (s,p) => {
        return s + p.exercises;
    }, 0)

    const totalPart = {
        name: 'Total',
        exercises: total,
    }

    return (
        <div>
            {parts.map((part) => {
                return <Part key={part.id} part={part}/>
            })}

            <Part part={totalPart} />
        </div>
    )
}

const Part = ({part}) => {
    return (
        <p>{part.name} {part.exercises}</p>
    )
}

export default Course;