import {useState} from "react";
import TextareaAutosize from "react-autosize-textarea"


const SliderComp = () => {
    const [val, setValue] = useState(0);
    const handleValue = (e) => {
        console.log(e.target.value)
        setValue(e.target.value)
    }

    const [text, setText] = useState([]);

    const handleTextChange = (e) => {
        const newText = setText(e.target.value)
        setText([...text,newText])

    };


    const Input = () => {
             return  <div className="slidecontainer">
                             <div className="slider-text">
                                  <TextareaAutosize cols="10" onChange={handleTextChange} placeholder="introvert"/>
                                  <TextareaAutosize cols="10" onChange={handleTextChange} placeholder="extrovert"/>
                             </div>
                           <input type="range" min={0} max={100}  className="slider"
                                   onChange={handleValue}>
                             </input>
                       </div>
    };

    const [inputList, setInputList] = useState([]);

    const onAddBtnClick = (event) => {

        setInputList(inputList.concat(<Input key={inputList.length} />));
    };

    const onRemoveBtnClick = (event) => {
        {setInputList(inputList.splice(0, inputList.length-1))}
    };


    return (
        <div>
            {/*<p>{text}</p>*/}
            <div className="input-list">
                {inputList}
            </div>
            <div className="btn-container">
                <div className="btn-plus" ><button onClick={onAddBtnClick} className="note-button">+</button></div>
                <div className="btn-minus" ><button onClick={onRemoveBtnClick} className="note-button">
                    <svg className="minus" width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.629063 0.81H5.90906V3.07H0.629063V0.81Z" fill="white"/>
                    </svg>
                </button></div>
            </div>

        </div>
    );
}

export default SliderComp


