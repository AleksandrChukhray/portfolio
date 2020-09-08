import {useEffect, createRef} from 'react';
const scroll = createRef();

function ScrollDown({ scrollTop }){
    const MAX_SCROLL_TOP = 350;

    const style = {
        opacity: 1 - scrollTop / MAX_SCROLL_TOP
    }

    return (
        <div className="scroll-down" style={style} ref={scroll}>
            <div className="scroll-down_text">scroll down</div>
            <div className="scroll-down_arrow"/>
        </div>
    );
}

export default ScrollDown;