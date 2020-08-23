import React from 'react';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            address: '',
            message: ''
        };

        this.handleChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        console.log('Change detected. State updated' + name + ' = ' + value);
    }

    handleSubmit(event) {
        alert('A form was submitted: ' + this.state.name + ' // ' + this.state.email);
        event.preventDefault();
    }

    render() {
        return (
            <div className="contact">
                <h1>Contact Us</h1>
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" id="nameImput" placeholder="Full Name" />
                    </div>
                    <div className="form-group">
                        <input name="email" type="email" value={this.state.email} onChange={this.handleChange} className="form-control" id="emailInput" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input name="phone" value={this.state.phone} onChange={this.handleChange} className="form-control" id="phoneInput" placeholder="Phone Number" />
                    </div>
                    <div className="form-group">
                        <input name="address" value={this.state.address} onChange={this.handleChange} className="form-control" id="addressInput" placeholder="Address" />
                    </div>
                    <div className="form-group">
                        <textarea name="message" rows="4" cols="22" value={this.state.message} onChange={this.handleChange} className="form-control" id="messageImput" placeholder="Message" />
                    </div>
                    <input type="submit" value="Submit" className="btn btn-primary" />
                </form>
            </div>
        )
    }
}
export default ContactForm;