import React from "react"
import Link from '../utils/link'
import {CloseEyes, OpenEyes} from "../components/icons";

import SEO from "../components/seo"

const NotFoundPage = () => (
    <>
        <SEO bodyClass='error-404' title="404: Not found"/>
        <section className='error404'>
            <div className='error404__inner'>
                <div className="logo">
                    <div className="logo--open">
                        <OpenEyes/>
                    </div>
                    <div className="logo--close">
                        <CloseEyes/>
                    </div>
                </div>
                <h1>404</h1>
                <p>Nothing to see here. <br/>
                    Check your URL and try again?</p>
                <Link className='btn btn--scarlet' to='/'>Home</Link>
            </div>
        </section>
    </>
)

export default NotFoundPage
