import {useState} from "react";
import TextareaAutosize from "react-autosize-textarea"

const Header = ({title}) => {
    const [inputValue,setInput] = useState("");

    const handleTextChange = (e) => {
        console.log(e.target.value)
        setInput(e.target.value)
    };
    return (
        <div className="title">
                <div className="about">
                    <TextareaAutosize placeholder="Title" cols="45" onChange={handleTextChange}/>
                </div>

        </div>
    )
}

export default Header
