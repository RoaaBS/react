import React from 'react'
import "./Create.css"

export default function Create() {
  return (
    <div className='form'>
<form >
  <div className="mb-3">
    <label htmlFor="exampleInput" className="form-label">Product Name</label>
    <input type="text" className="form-control"   />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInput" className="form-label">Product price</label>
    <input type="text" className="form-control"  />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInput" className="form-label">Product description</label>
    <input type="text" className="form-control"  />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInput" className="form-label">Product image</label>
    <input class="form-control" type="file" id="formFile"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>


    </div>
  )
}
