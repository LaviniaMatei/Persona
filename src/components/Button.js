import {useState} from "react";

const Button = () => {

    const [inputValue, setInput] = useState("");
    const handleTextChange=  (event) => {
        setInput(event.target.value)
    }
    const Input = () => {
        return (
            <div className="wrapper-bullet" >
                <div className="print"contentEditable="true" placeholder="curious" onChange={handleTextChange}></div>
            </div>
        );

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
            <div className="input-wrapper">{inputList}
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
    )
}

export default Button;
