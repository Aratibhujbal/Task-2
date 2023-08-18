import React, { useEffect, useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { DROPDOWN } from './constant';

function Form() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    contact: '',
    dropdown: '',
  });

  const [data, setData] = useState([]);
  const [isPhone, setIsPhone] = useState(0);


  const handleSubmit = (e) => {
    e.preventDefault()
    setData([...data, formData])
  }


  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  console.log(data);


  useEffect(() => {
    if (data) {
      localStorage.setItem("data", JSON.stringify(data))
    }
  }, [data])

  return (
    <>
      <div className='container mt-4 border border-black p-2'>
        <form onSubmit={handleSubmit}>
          <div className='row'>
            {/* <div className='col-10'> */}

              <div className='col-6 mb-4'>
                <div className="form-group ">
                  <label >First Name</label>
                  <input className="form-control"
                    type="text"
                    name='fname'
                    value={formData.fname}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='col-6 mb-4'>
                <div className="form-group ">
                  <label >Last Name</label>
                  <input className="form-control"
                    type="text"
                    name='lname'
                    value={formData.lname}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='col-4'>

                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Choose</InputLabel>
                  <Select
                    value={FormData.dropdown}
                    label="choose"
                    name='contact'
                    onChange={handleChange}

                  >
                    {DROPDOWN.map((e) => {
                      return <MenuItem value={e}>{e}</MenuItem>
                    })}
                  </Select>
                </FormControl>
              </div>



              {formData.contact === "Phone" && <div className='col-6'>
                <div className="form-group ">

                  <label >Phone</label>
                  <input className="form-control"
                    type="text"
                    name='Phone'
                    onChange={handleChange}
                  />
                </div>
              </div>}
              {formData.contact === "Email" && <div className='col-6'>
                <div className="form-group ">

                  <label >Email </label>
                  <input className="form-control"
                    type="text"
                    name='Email'
                    onChange={handleChange}
                  />
                </div>
              </div>}
            {/* </div> */}
          </div>

          <button type="submit" className="btn btn-success mt-4">Submit</button>
        </form>
      </div>

    </>
  )
}

export default Form