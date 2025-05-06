import React from 'react'

const ContactTextModal = ({ text }) => {
    console.log(text);
  return (
    <div><input type="checkbox" id="my-modal-3" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box relative">
        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                  <p className="py-4">{text}</p>
      </div>
    </div></div>
  )
}

export default ContactTextModal