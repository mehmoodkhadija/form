
import React from 'react'

const App = () => {
  return (
  
      
<div>
  <div className="container">
    <div className="py-5 text-center">
      <h2>Checkout form</h2>
      <p className="lead">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
    </div>
        <h4 className="mb-3">Information</h4>
        <form className="needs-validation" noValidate>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="firstName">First name</label>
              <input type="text" className="form-control" id="firstName" placeholder defaultValue required />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="lastName">Last name</label>
              <input type="text" className="form-control" id="lastName" placeholder defaultValue required />
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-md-6 mb-3">
          <label htmlFor="address">Address</label>
            <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
            <div className="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder="you@example.com" />
            <div className="invalid-feedback">
              Please enter a valid email address.
            </div>
          </div>
          </div>
       
        
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="country">Country</label>
              <select className="custom-select d-block w-100 p-2 mt-2" id="country" required>
                <option value>Choose...</option>
                <option>United States</option>
                <option>Pakistan</option>
                <option>America</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid country.
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="state">City</label>
              <select className="custom-select d-block w-100 p-2 mt-2" id="state" required>
                <option value>Choose...</option>
                <option>Lahore</option>
                <option>Sarghoda</option>
                <option>Chiniot</option>
              </select>
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>
          </div>
          <h4 className="mb-3">Skill</h4>
          <div className="d-block my-3">
            <div className="custom-control custom-radio">
              <input id="skill" name="skill" type="radio" className="custom-control-input" defaultChecked required />
              <label className="custom-control-label" htmlFor="skill">Php</label>
            </div>
            <div className="custom-control custom-radio">
              <input id="skill" name="skill" type="radio" className="custom-control-input" defaultChecked required />
              <label className="custom-control-label" htmlFor="skill">Javascript</label>
            </div>
            <div className="custom-control custom-radio">
              <input id="skill" name="skill" type="radio" className="custom-control-input" defaultChecked required />
              <label className="custom-control-label" htmlFor="skill">React.js</label>
            </div>
          </div>
          <button className="btn btn-danger btn-lg btn-block" type="submit">Continue to checkout</button>
        </form>
      </div>
    </div>
  
  
  )
}

export default App