import React, {Component} from 'react'

import {Chevron} from './icons'

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
}

class Newsletter extends Component {

    state = {
        email: '',
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()

        if (!this.refs.form.checkValidity()) return false

        fetch("https://hooks.zapier.com/hooks/catch/2181815/bx7ha5z/", {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: encode({
                "form-name": this.refs.form.getAttribute("name"),
                ...this.state,
            }),
        })
            .then(() => {
                this.setState({result: 'success'})
            })
            .catch(error => this.setState({result: "fail", msg: error}))
    }

    render() {
        let props = {
            ref: "form",
            name: "newsletter",
            className: "form form--newsletter",
            onSubmit: this.handleSubmit,
        }

        if (this.state.result === "success")
            return (
                <p className="contact__success">Thanks for subscribing.</p>
            )

        return (
            <form {...props}>
                <div className='form__row form__row--submit'>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email Address"
                        onChange={this.handleChange}
                        required
                    />
                    <button type="submit" className="btn btn--scarlet">
                        Subscribe
                    </button>
                </div>
            </form>
        )
    }
}

export default Newsletter