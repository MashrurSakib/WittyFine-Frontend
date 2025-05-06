import React from 'react'

const FullTestimonial = ({ text }) => {
    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {/* <h3 className="text-lg font-bold">Congratulations random Internet user!</h3> */}
                    <p className="py-4">{text}</p>
                </div>
            </div>
        </>
    )
}

export default FullTestimonial