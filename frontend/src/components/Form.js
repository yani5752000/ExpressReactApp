import React from "react";

class Form extends React.Component {
    render() {
        let { handleChange, handleSubmit, task } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <h3>{task}</h3>
                <label>Email</label>
                <input type='email' name="email" onChange={handleChange}></input>
                <label>Password</label>
                <input type="password" name="password" onChange={handleChange}></input>
                <button type='submit'>{task}</button>
            </form>
        )
    }
}

export default Form;