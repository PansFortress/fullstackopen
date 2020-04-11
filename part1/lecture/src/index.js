/*
    Details around handling multiple pieces of state using react hooks
*/

import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const History = (props) => {
    if (props.allClicks.length === 0){
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    }

    return (
        <div>
            button press history: {props.allClicks.join(' ')}
        </div>
    )
}

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>{props.text}</button>
    )
}

const App = (props) => {
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);
    const [allClicks, setAll] = useState([]);
    console.log('the props:', props)

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'));
        setLeft(left + 1);
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'));
        setRight(right + 1);
    }

    return (
        <div>
            {left}
            <Button handleClick={handleLeftClick} text="left" />
            {right}
            <Button handleClick={handleRightClick} text="right" />
            <History allClicks={allClicks} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
