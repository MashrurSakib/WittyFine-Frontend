import React from 'react'
import { toast } from 'react-hot-toast';
import {IoCloseCircle} from 'react-icons/io5'

const SolutionShow = ({solutions,setSolutions}) => {
    const handleClicked = (id)=>{
        // console.log(solutions.filter(solution=> solution !== e.target.id));
        setSolutions(solutions => solutions.filter(solution=> solution.id !== id));
        toast.success(" is deleted!");
    };
  return (
    <>
            {solutions.map((solution) => {
                return (
                    <div key={solution.id} className="bg-primary w-[399px] text-black py-2 cursor-pointer card mx-5">
                    
                        <div className='card-body '>
                           <div className="card-actions justify-end">
                              <button onClick={() => handleClicked(solution?.id)} className='btn btn-ghost'><IoCloseCircle className='text-xl'/></button>
                            </div>
                           <p className='whitespace-normal break-words'>Name: {solution?.name}</p>
                           <p className=' whitespace-normal break-words'>Description: {solution?.description}</p>
                        </div>
                    </div>
                );
            })}
        </>
  )
}

export default SolutionShow