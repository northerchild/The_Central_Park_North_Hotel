import React from 'react';
import Header from './header'
import {Global,css} from '@emotion/react';
import Helmet from 'react-helmet';
import Footer from './footer';
import useSeo from '../hooks/use-seo';

const Layout = (props) => {
    const seo = useSeo();
    const {fallbackSeo:{description,title}} = seo;
    return (
        <>
            <Global
                styles={css`
                    html{
                        font-size:62.5%;
                    }
                    body{
                        font-size:1.6px;
                        font-size:1.6rem;
                        line-height:1.5;
                    }
                    h1,h2,h3{
                        margin: 0;
                        line-height:1.5;
                    }
                    h1,h2{
                        font-family:'Roboto', serif;
                    }
                    h3{
                        font-family: 'PT Sans', sans-serif;
                    }
                    ul{
                        list-style:none;
                        margin: 0;
                        padding: 0;
                    }                    
                `
                }
            />
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap" />
            </Helmet>
            <Header/>
            {props.children}
            <Footer title={title}/>
        </>  
        );
}
 
export default Layout;