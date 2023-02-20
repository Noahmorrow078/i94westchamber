import React from 'react';


const SectionTitle = ({subtitle, title, description, textAlign, radiusRounded, color}) => {
    return (
        <div className={`section-title ${textAlign}`}>
         
                <h4 className={`subtitle ${radiusRounded} `}><span className="theme-gradient" dangerouslySetInnerHTML={{__html: subtitle}}></span></h4>
          
                <h2 className={`title w-600 mb--20 ${color}`} dangerouslySetInnerHTML={{__html: title}}></h2>
           
                <p className="description b1" dangerouslySetInnerHTML={{__html: description}}></p>
        </div>
    )
}
export default SectionTitle;