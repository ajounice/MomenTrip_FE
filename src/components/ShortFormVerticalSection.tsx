import React, {ReactElement, useCallback, useState} from 'react';
import '@/styles/components/ShortFormVerticalSection.css';
import { RiHeart3Line, RiHeart3Fill, RiQuestionAnswerLine, RiShareForwardLine, RiListUnordered } from "react-icons/ri";

// TODO Add Button Click Event
// TODO Create Bottom NavigationBar
// TODO Video Background

function ShortFormVerticalSection() : ReactElement{
    const [ isSelectedHeart , setIsSelectedHeart ] = useState<boolean>(false);

    const onClickHeart = useCallback(()=>{
        setIsSelectedHeart(!isSelectedHeart);
    },[isSelectedHeart])


    return(
        <section className={"verticalSection"}>
            { isSelectedHeart ? <RiHeart3Fill onClick={onClickHeart} className={"sectionItem"}/> : <RiHeart3Line onClick={onClickHeart} className={"sectionItem"} /> }
            <RiQuestionAnswerLine className={"sectionItem"} />
            <RiShareForwardLine className={"sectionItem"} />
            <RiListUnordered className={"sectionItem"} />
        </section>
    );
}

export default ShortFormVerticalSection;
