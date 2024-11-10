import React, {useEffect} from "react";
import Link from "../utils/link";
import {OpenEyes, Darling, Group, WordMarkWhite, CloseEyes} from "./icons";
import {Instagram, Facebook, Linkedin, Tiktok} from "./icons";
import {gsap} from "gsap";

const Footer = () => {

    useEffect(() => {
        const logoAnimation = gsap.timeline({repeat: -1, repeatDelay: 5});

        logoAnimation
            .to('.logo--close', {
                visibility: 'visible',
                opacity: 1,
                duration: 0.2,
                ease: 'power1.inOut',
            })
            .to('.logo--close', {
                visibility: 'hidden',
                opacity: 0,
                duration: 0.2,
                ease: 'power1.inOut'
            });
    }, []);

    return (
        <div className="footer">
            <div className='footer__inner'>
                <div className='footer__top'>
                    <div className="logo">
                        <div className="logo--word">
                            <WordMarkWhite/>
                        </div>
                        <div className="logo--open">
                            <OpenEyes/>
                        </div>
                        <div className="logo--close">
                            <CloseEyes/>
                        </div>
                    </div>
                </div>

                <div className='footer__middle'>
                    <div className='footer__time'>
                        <ul>
                            <li>Mon to Thurs <br/> 7AM – 4PM</li>
                            <li>Fri to Sun <br/> 7AM – 5PM</li>
                        </ul>
                    </div>

                    <div className='footer__location'>
                        <Link target='_blank' to='https://maps.app.goo.gl/j5LFLMA7r51i7z1Z8'>285–287 Coventry St <br/> STH.Mel VIC 3205</Link>
                        <Link to='mailto:eat@cherieatery.com.au'>eat@cherieatery.com.au</Link>
                        <Link to='tel:+61396902688'>03 9690 2688</Link>
                    </div>

                    <div className='footer__nav'>
                        <ul>
                            <li><Link target='_blank' to='https://darlinggroup.com.au/careers/'>Careers</Link></li>
                            <li><Link target='_blank' to='https://darlinggroup.com.au/vouchers/'>Vouchers</Link></li>
                            <li><Link to='/events/'>Events</Link></li>
                        </ul>

                        <div className='footer__social'>
                            <h3>Socials</h3>
                            <ul>
                                <li><Link to='https://www.instagram.com/cherieatery/'><Instagram/></Link></li>
                                <li><Link to='https://www.facebook.com/p/cheri-eatery-61566764920505/'><Facebook/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='footer__bottom'>
                    <div className='footer__bottom--logo'>
                        <Link target='_blank' to='https://darlinggroup.com.au/'>
                            <Darling/>
                            <Group/>
                        </Link>
                    </div>

                    <div className='footer__credit'>
                        <div className='footer__col'>
                            <p>© 2024 Darling Group. All rights reserved.</p>
                        </div>

                        <div className='footer__res'>
                            <ul>
                                <li><Link target='_blank' to='https://darlinggroup.com.au/cheri/'>Cheri</Link></li>
                                <li><Link target='_blank' to='https://darlinggroup.com.au/higher-ground/'>Higher Ground</Link></li>
                                <li><Link target='_blank' to='https://darlinggroup.com.au/terrace/'>Terrace</Link></li>
                                <li><Link target='_blank' to='https://darlinggroup.com.au/top-paddock/'>Top paddock</Link></li>
                                <li><Link target='_blank' to='https://darlinggroup.com.au/kettle-black/'>Kettle Black</Link></li>
                                <li><Link target='_blank' to='https://darlinggroup.com.au/token/'>Token</Link></li>
                                <li><Link target='_blank' to='https://darlinggroup.com.au/darling/'>Darling</Link></li>
                                <li><Link target='_blank' to='https://darlinggroup.com.au/dundas-faussett/'>Dundas & Faussett</Link></li>
                                <li><Link target='_blank' to='https://darlinggroup.com.au/bambu/'>Bambu</Link></li>
                                <li><Link target='_blank' to='https://darlinggroup.com.au/stringers/'>Stringers</Link></li>
                            </ul>
                        </div>

                        <div className='footer__col'>
                            <ul>
                                <li><Link to='/terms'>Privacy & Terms</Link></li>
                                <li><Link target='_blank' to='https://atollon.com.au/'>Site by Atollon</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;