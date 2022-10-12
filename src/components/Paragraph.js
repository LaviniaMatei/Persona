import {useState } from 'react'
import TextareaAutosize from "react-autosize-textarea"

    const Paragraph = () => {

        const Input = () => {
            return <ul>
                  <li>
                    <div className="point">
                        <span className="point-img"></span>
                    </div>
                <TextareaAutosize cols="39" onChange={handleTextChange}/>
                 </li>
              </ul>

        };

        const [text, setText] = useState([]);

        const handleTextChange = (e) => {
            const newText = setText(e.target.value)
            console.log(e.target.value )
            setText([...text,newText])

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
    };





export default Paragraph
