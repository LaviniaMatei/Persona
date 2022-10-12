
import { useRef, useState } from 'react';
import TextareaAutosize from "react-autosize-textarea"

const Image = () => {

    const target = useRef(null)

    const [state, setState] = useState({
        firstName: "",
        age: "",
        job: "",
        location: "",
        description: "",
    })

    function handleChange(evt) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }

    const [photo,setPhoto] = useState(`./images/Rectangle 3.png`)
    const handleUpload = (e) => {
        const uploaded = e.target.files[0]
        setPhoto(URL.createObjectURL(uploaded));
    }
    return (
        <div>
            <div className="profile-image">{photo!== null && <img src={photo}/>}
            </div>
            <div className="profile-btn">
            <button className="note-button " onClick={()=> target.current.click()}>+</button>
            <input ref={target} type="file"  onChange={(e)=>handleUpload(e)}/>
            </div>
            <div className="profile-description">
                {/*<p><textarea placeholder="description"/></p>*/}
                <form>
                    <div className="profile-info"><label>
                        <input className="name"
                            type="text"
                            name="firstName"
                            value={state.firstName}
                            onChange={handleChange}
                            placeholder="Jane Doe"
                        />
                    </label>
                    </div>

               <div className="profile-container">
                   <label>
                   Age:
                   <input className="profile-input"
                          placeholder="20"
                       type="text"
                       name="age"
                       value={state.age}
                       onChange={handleChange}
                   />
               </label>
               </div>
                    <div className="profile-container">
                        <label>
                        Job:
                        <input className="profile-input"
                               placeholder="Jane Doe"
                            type="text"
                            name="job"
                            value={state.job}
                            onChange={handleChange}
                               placeholder="Designer"
                        />
                    </label>
                    </div>
                    <div className="profile-container">
                        <label>
                        Location:
                        <input className="profile-input"
                               placeholder="London"
                            type="text"
                            name="location"
                            value={state.location}
                            onChange={handleChange}
                        />
                    </label>
                    </div>
                    <div className="profile-container">
                        <label>

                            <TextareaAutosize className="profile-input desc"
                                   placeholder="description."
                                   type="text"
                                   name="description"
                                   value={state.description}
                                   onChange={handleChange}
                            />
                        </label>
                    </div>
                </form>
            </div>
           
        </div>
    )
}

export default Image
