import {useState } from 'react';
import TextareaAutosize from "react-autosize-textarea"
import AutosizeInput from 'react-input-autosize';

const About = () => {
    const [text,setText] = useState("");

    const textChangeHandler = (e) => {
        console.log(e.target.value)
        setText(e.target.value)
     };

    const [inputValue, setInput] = useState("");

    const handleTextChange=  (event) => {
        setInput(event.target.value)
    }
    return (
        <div>
            {/*<div className="title">*/}
            {/*    <div>*/}
            {/*        <AutosizeInput className="about"*/}
            {/*            name="form-field-name"*/}
            {/*            value={inputValue}*/}
            {/*            onChange={handleTextChange}*/}
            {/*            onChange={function(event) {*/}
            {/*                // console.log(event.target.value)*/}
            {/*                setInput(event.target.value)*/}

            {/*            }}*/}
            {/*            placeholder="About"*/}
            {/*        />*/}

            {/*    </div>*/}
            {/*</div>*/}
        <TextareaAutosize cols="12"  className="textarea" rows="1" placeholder="Penatibus consectetur phasellus per a in condimentum nam sem a tellus dignissim conubia consectetur et vulputate taciti tempor a.Condimentum ullamcorper metus parturient parturient rutrum scelerisque sodales suspendisse metus sociis sociis ridiculus lacus leo.”"
         onChange={textChangeHandler}
        />
        </div>
    )
}

export default About
