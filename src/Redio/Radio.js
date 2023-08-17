import React, { useEffect, useState } from 'react'

function Radio() {

  const [form, setForm] = useState({
    fname: '',
    lname: '',
    contact: ''
  });

  const [data, setData] = useState([]);
  const [isPhone, setIsPhone] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault()
    setData([...data, form])
  }


  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  console.log(data);

  const [selected, setSelected] = useState("")

  const handleRadioChange = (e) => {
    setSelected(e.target.value)
  }

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

            <div className='col-6'>
              <div className="form-group ">
                <label >First Name</label>
                <input className="form-control"
                  type="text"
                  name='fname'
                  value={form.fname}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='col-6'>
              <div className="form-group ">
                <label >Last Name</label>
                <input className="form-control"
                  type="text"
                  name='lname'
                  value={form.lname}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='col-6'>
              <label >How should we contact you?</label><br />
              <label className='m-2'>
                <input className='m-2'
                  type='radio'
                  value="phone"
                  onChange={handleRadioChange}
                  onClick={() => setIsPhone(1)}

                  checked={selected === "phone"}
                />
                Phone
              </label>
              <label>
                <input className='m-2'
                  type='radio'
                  value="email"
                  onChange={handleRadioChange}
                  onClick={() => setIsPhone(2)}

                  checked={selected === "email"}

                />
                Email
              </label>
            </div>

            {isPhone === 1 ? <div className='col-6'>
              <div className="form-group ">
                <label >Phone</label>
                <input className="form-control"
                  type="text"
                  name='contact'
                  value={form.contact}
                  onChange={handleChange}
                />
              </div>
            </div> : ''}
            {isPhone === 2 ? <div className='col-6'><div className="form-group ">
              <label >Email</label>
              <input className="form-control"
                type="text"
                name='contact'
                value={form.contact}
                onChange={handleChange}
              />
            </div>
            </div> : ''}

          </div>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Radio