import {createRef} from "react";
import { withTranslation } from "../../i18n";

const scroll = createRef();

function ScrollDown({ scrollTop, t }){
    const MAX_SCROLL_TOP = 350;

    const style = {
        opacity: 1 - scrollTop / MAX_SCROLL_TOP
    }

    return (
        <div className="scroll-down" style={style} ref={scroll}>
            <div className="scroll-down_text">{t('scroll')}</div>
            <div className="scroll-down_arrow"/>
        </div>
    );
}

export default withTranslation('common')(ScrollDown);