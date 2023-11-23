import React from 'react'
import { HelmetProvider, Helmet } from "react-helmet-async";
import Search from './Search'
import Header from './Header'
import Footer from './Footer'
import ScrollTo from '../../utils/scrollto'

const Main = (props) => {

    return (
        <HelmetProvider>
            <ScrollTo />
            <Helmet
                titleTemplate="%s | Documentary Youtube"
                defaultTitle="Documentary Youtube"
                defer={false}
            >
                {props.title && <title>{props.title}</title>}
                <meta name="description" content={props.description} />
            </Helmet>

            <Header />
            <main id='main' role='main'>
                <Search />
                {props.children}
            </main>
            <Footer />
        </HelmetProvider>
    )
}

export default Main