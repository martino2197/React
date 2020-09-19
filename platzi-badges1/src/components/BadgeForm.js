import React from "react";

class BadgeForm extends React.Component {
  handleChange = (e) => {
    console.log({ name: e.target.name, value: e.target.value });
  };

  handleClick = (e) => {
    console.log("Button was clicked");
  };

  handleSubmit = (e) => {
    e.preventDefault(); //evitamos que el formulario se envie por defecto
    console.log("Form was submitted");
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="firstName"
            />
          </div>
          <button
            type="submit" //Por defecto esta en submit
            onClick={this.handleClick}
            className="btn btn-primary"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
