import React from "react";
import parse from "react-html-parser";
import Link from "../utils/link";
import {WordMark} from "./icons";
import ContactForm from "./contact-form";
import {Facebook, Instagram, Linkedin, Tiktok} from "./icons";

const Contact = ({openingHours, address, email, phone, careers}) => {


    return (
        <section className='contact'>
            <div className='contact__inner' data-sal="slide-up" data-sal-duration="1000" data-sal-easing="ease">
               <div className='contact__logo'>
                   <WordMark/>
               </div>

                <div className='contact__detail'>
                    <div className='contact__time'>
                        {openingHours && parse(openingHours)}
                    </div>

                    <div className='contact__location'>
                        {address && <Link to='/'>{parse(address)}</Link>}
                        {email?.url && <Link to={`mailto${email.to}`}><span>E</span> {email.title}</Link>}
                        {phone?.url && <Link to={`tel:${phone.url}`}><span>T</span> {phone.title}</Link>}
                    </div>

                    <div className='contact__nav'>
                        <div className='contact__social'>
                            <h3>Socials</h3>
                            <ul>
                                <li><Link to='https://www.instagram.com/cherieatery/'><Instagram/></Link></li>
                                <li><Link to='https://www.facebook.com/p/cheri-eatery-61566764920505/'><Facebook/></Link></li>
                            </ul>
                        </div>

                        <Link target='_blank' to='https://darlinggroup.com.au/careers/'>We’re Hiring <br/> Visit Careers</Link>
                    </div>
                </div>

                <div className='contact__form'>
                    <ContactForm/>
                </div>
            </div>
        </section>
    )
}

export default Contact;