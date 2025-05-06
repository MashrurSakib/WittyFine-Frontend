import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { v4 } from 'uuid';

const SolutionCreate = ({ solutions, setSolutions }) => {
    const [name,setName]=useState('')
    const [value, setValue] = useState("");

    
    const handleClicked = (e) => {
        e.preventDefault();

        if (value === "" || value === null || name ==='') {
            toast.error("Empty input");
        } else if(solutions.find(tag => tag === value)){
          toast.error("Duplicate input");
            setValue((value) => "");
            setName("")
        }else {
            setSolutions((solutions) => [...solutions, {id:v4(),name:name,description:value }]);
            setValue((value) => "");
            setName("")
        }
    };
  return (
    <>
            <div className="form-control w-full mx-auto ">
                <div className="">
                    <input
                        type="text"
                        placeholder="Create name..."
                        className="input input-bordered w-full my-3"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                  />
                  <br />
                    <input
                        type="text"
                        placeholder="Create description..."
                        className="input input-bordered w-full my-3"
                        value={value}
                        onChange={(e)=>setValue(e.target.value)}
                    />
                    <button
                        className="btn w-full my-3"
                        onClick={(e) => handleClicked(e)}
                    >
                  +
                  {/* <AiOutlinePlus /> */}
                    </button>
                </div>
            </div>
            <div className="gap-2"></div>
        </>
  )
}

export default SolutionCreate