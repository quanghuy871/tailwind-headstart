import React, {Component} from 'react'
import {CheriShort} from "./icons";

function encode(data) {
    return Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&')
}

class SubscribeForm extends Component {
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
        fetch(`https://hooks.zapier.com/hooks/catch/3298056/2hdb5qs/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: encode({
                ...this.state
            })
        }).then(() => {
            this.setState({result: 'success'})
        }).catch(error => this.setState({result: 'fail', msg: error}))
    }

    render() {
        let props = {
            ref: this.form,
            className: 'form',
            onSubmit: this.handleSubmit
        }
        if (this.state.result === 'success') {
            return (
                <div className="form__wrapper form__success form__subscribe">
                    <button>CLOSE</button>
                    <div>
                        <CheriShort/>
                        <p>You’ve subscribed.<br/>Welcome to the Darling group.</p>
                    </div>
                    <a href="mailto:eat@cherieatery.com.au">eat@cherieatery.com.au</a>
                </div>
            )
        }

        return (
            <>
                <button onClick={this.toggleForm} className="btn btn--black">Subscribe for Updates</button>
                <div
                    className={`form__wrapper form__subscribe ${this.state.toggleForm ? 'active' : ''}`}>
                    <div className="form--left">
                        <h2>Stay up to date on <br/> our Progress and Latest News</h2>

                        <form {...props}>
                            <div className="form--row">
                                <input onChange={this.handleChange} placeholder="First Name" name="first-name"
                                       type="text" required/>
                            </div>

                            <div className="form--row">
                                <input onChange={this.handleChange} placeholder="Last Name" name="last-name" type="text"
                                       required/>
                            </div>

                            <div className="form--row form--row__double form--email">
                                <div className="form--row__item">
                                    <input onChange={this.handleChange} placeholder="Email Address" name="email"
                                           type="email" required/>
                                </div>
                                <div className="form--row__item">
                                    <input onChange={this.handleChange} placeholder="Postcode" name="postcode"
                                           type="text" required/>
                                </div>
                            </div>

                            <div className="form--row form--row__double form--submit">
                                <div className="form--row__item">
                                    <div className="form--checkbox">
                                        <input id="signin" type="checkbox" name="terms" onChange={this.handleChange}
                                               required/>
                                        <label htmlFor="signin">By signing up, I agree to the Darling Group’s Privacy
                                            Policy</label>
                                    </div>
                                </div>
                                <button className="btn btn--vanilla" type="submit">Subscribe</button>
                            </div>
                        </form>

                        <a href="mailto:eat@cherieatery.com.au">eat@cherieatery.com.au</a>
                    </div>

                    <div className="form--right" onClick={this.toggleForm}></div>
                </div>
            </>
        )
    }
}

export default SubscribeForm