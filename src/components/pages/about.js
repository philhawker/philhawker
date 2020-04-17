import React from 'react'
import profilePicture from '../../../static/assets/images/bio/kelsphil.jpg'

export default function () {
    return (
        <div className='content-page-wrapper'>
            <div
                className='left-column'
                style={{
                    background: "url(" + profilePicture + ") no-repeat",
                    height: 'calc(120vh - 84px)',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <div className='right-column'>
                <p>Ever since i was about 12 years old, I discovered a fascination with building something and actually seeing it function the way I had intended it to. It was everything from rebuilting a motorcycle engine to upgrading the family computer's ram to 512 MB! Even as an adult, successfully assembling my daughters crib is chalked up as a win for me. </p>
                <p>I've always felt that these traits I had discovered were critical components to my overall happiness and success in my career, however, I had no idea what field these should be applied to. Until I took a leap of faith and began my development journey.</p>
                <p>I attended Bottega Tech's full time, 12 week, Full-Stack Engineering course. And it was hardcore! I love working with many different frameworks and libraries such as Flask, Django, Node, and most of all React. If I'm not consumed by a development project, then I'll most definitely be riding motocross, eating at an awesome restaurant, or sitting in front of my PC and enjoying some kind of game with an incredible single player experience.</p>
                <p>I consider myself a down-to-earth nerd</p>
            </div>
        </div>
    )
}