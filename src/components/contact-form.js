import React, {Component} from 'react'
import {CheriShort} from "./icons";

function encode(data) {
    return Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&')
}

class ContactForm extends Component {
    state = {
        result: null,
        toggleForm: false
    }

    constructor(props) {
        super(props)
        this.form = React.createRef()
    }

    toggleForm = () => {
        this.setState((prevState) => ({
            toggleForm: !prevState.toggleForm
        }));
    };

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        if (!this.form.current.checkValidity()) return false
        fetch(`https://hooks.zapier.com/hooks/catch/3298056/2hdofhf/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: encode({
                ...this.state
            })
        }).then(() => {
            this.setState({result: 'success'})
        }).catch(error => this.setState({result: 'fail', msg: error}))
    }

    onCompleted = (e) => {
        this.setState({result: 'success'})
    }

    render() {
        let props = {
            ref: this.form,
            className: 'form',
            onSubmit: this.onCompleted
        }
        if (this.state.result === 'success') {
            return (
                <div className="form__wrapper form__success">
                    <h3>Message Sent</h3>
                    <h2>Thanks for contacting us</h2>
                    <p>Et sit velit pellentesque aliquet massa. Tincidunt sed fringilla lectus sed magna mattis netus.
                        Egestas id elit fermentum pellentesque massa aliquam nisl amet libero.</p>
                    <div className='form__success--buttons'>
                        <a className='btn btn--scarlet' href="/">Home</a>
                        <a className='btn btn--border' href="/">Shop Store</a>
                    </div>
                </div>
            )
        }
        return (
            <>
                <div className={`form__wrapper form__contact ${this.state.toggleForm ? 'active' : ''}`}>
                    <div className="form--left" onClick={this.toggleForm}></div>
                    <div className="form--right">
                        <form {...props}>
                            <div className="form--row form--row__double">
                                <div className="form--row__item">
                                    <input onChange={this.handleChange} placeholder="First Name" name="first-name"
                                           type="text" required/>
                                </div>
                                <div className="form--row__item">
                                    <input onChange={this.handleChange} placeholder="Last Name" name="last-name"
                                           type="text" required/>
                                </div>
                            </div>

                            <div className="form--row form--row__double">
                                <div className="form--row__item">
                                    <input onChange={this.handleChange} placeholder="Email Address" name="email"
                                           type="email" required/>
                                </div>
                                <div className="form--row__item">
                                    <input onChange={this.handleChange} placeholder="Contact Number" name="phone"
                                           type="text" required/>
                                </div>
                            </div>

                            <div className="form--row form--row__textarea">
                                <textarea onChange={this.handleChange} placeholder="What can we help with?"
                                          name="message"/>
                            </div>

                            <div className="form--row form--row__double form--submit">
                                <div className="form--row__item">
                                    <div className="form--checkbox">
                                        <input id="keep-in-touch" type="checkbox" name="subscribe"
                                               onChange={this.handleChange}/>
                                        <label htmlFor="keep-in-touch">Keep in touch with Cheri and the Darling
                                            Group</label>
                                    </div>
                                </div>
                                <button className="btn btn--scarlet" type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default ContactForm