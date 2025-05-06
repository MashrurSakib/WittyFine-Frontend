import React, { useState } from 'react'
import JoditEditor from 'jodit-react';
const BlogTextEditor = ({ setValue, value }) => {
  //className='h-[350px] z-50 ql-toolbar' value={value} onChange={setValue} 
  console.log(value)
  return (
    <JoditEditor
      value={value}
      // config={config}
      tabIndex={1} // tabIndex of textarea
      // onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
      onChange={setValue}
    />
  )
}

export default BlogTextEditor