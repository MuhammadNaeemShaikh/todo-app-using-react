import React, { useState } from 'react'
let id = 0

function TODO() {


    const [inputData, setInputData] = useState('');
    const [item, setItem] = useState([]);
    const arr = [...item]
    const [toggleButton, setToggleButton] = useState(true)

    //add item in todo list
    const addtodo = () => {
        if(!toggleButton){
            arr[id]=inputData
            setItem(arr)
            setToggleButton(true);
        }
        else{
            setItem([...item, inputData]);
            setToggleButton(true);
        }
        
    }


    //edit the item in an array
    const editItem = (e) => {
        let val = item.find((currentVal, index) => {
            return index === e;
        })
        setInputData(val);
        id = e;
        setToggleButton(false);
    }

    //delete an item in an array
    const deletetodo = (e) => {

        arr.splice(e, 1)
        setItem(arr)
    }

    //remove all the item in an array

    const removeAll = () => {
        return setItem([]);
    }

    return (
        <>
            <div>
                <div>
                    <p>Add Your item HERE 👍</p>
                </div>
                <div>
                    <input type="text" placeholder="ADD ITEMS " value={inputData} onChange={(e) => setInputData(e.target.value)} />
                    {
                        toggleButton?<i className="fa-regular fa-plus" onClick={addtodo}></i>:
                        <i className="fa-regular fa-pen-to-square" onClick={addtodo}></i>
                        
                    }
                </div>
                {
                    item.map(function (currentval, index) {
                        return (
                            <div key={index}>
                                <span>{currentval}</span>
                                <i className="fa-regular fa-pen-to-square" onClick={() => editItem(index)}></i>
                                <i className="fa-regular fa-trash" onClick={() => deletetodo(index)}></i>
                            </div>
                        )
                    })
                }
                <button onClick={removeAll}>Remove All</button>
            </div>
        </>
    )
}

export default TODO

