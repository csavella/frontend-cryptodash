import React from 'react';
import './Glossary.css';
import data from './Glossary.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const Glossary = () =>{
    /* When letter is clicked at top, will scroll to
    designated element containing letter in page */
    const handleScroll = (e) =>{
        document.getElementById("item-" + e.target.value).scrollIntoView();
    }

    return(
        <div className="glossary-container">
            <div className="glossary-header-container">
                {Object.keys(data).map(key => {
                    return(
                        <span><input type="button" className="letter-nav bg-light" value={key} onClick={e => handleScroll(e)}/></span>
                    )
                })}
            </div>
                {Object.keys(data).map(key => {
                    return(
                        <div className="glossary-body-container">
                            <div className={"item"} id={"item-" + key}><h1>{key}</h1></div>
                            <div className={"item-definitions"}>
                                {Object.keys(data[key]).map(item => {
                                    return(
                                        <div className={"definition-" + data[key][item].term + "-container"}>
                                            <div className={"term"}><span>{data[key][item].term + ":"}</span></div>
                                            <div className={"definition"}><span>{data[key][item].description}</span></div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}
export default Glossary;