import React, {Dispatch, ReactElement, SetStateAction, useCallback, useState} from 'react';
import '@/styles/components/ShortFormVerticalSection.css';
import { RiHeart3Line, RiHeart3Fill, RiQuestionAnswerLine, RiShareForwardLine, RiListUnordered } from "react-icons/ri";

// TODO Add Button Click Event
// TODO Create Bottom NavigationBar
// TODO Video Background

interface VerticalSectionProps {
    isSelectComment : boolean;
    setIsSelectComment : Dispatch<SetStateAction<boolean>>;

    isClickedShare : boolean;
    setIsClickedShare : Dispatch<SetStateAction<boolean>>;

    isSelectedHeart : boolean;
    setIsSelectedHeart : Dispatch<SetStateAction<boolean>>;

    isSelectedInfo : boolean;
    setIsSelectedInfo : Dispatch<SetStateAction<boolean>>;
}

function ShortFormVerticalSection({isSelectedInfo,setIsSelectedInfo,isSelectedHeart,setIsSelectedHeart,isSelectComment , setIsSelectComment, isClickedShare, setIsClickedShare} : VerticalSectionProps) : ReactElement{


    const onClickShare = useCallback(()=>{
        setIsClickedShare(!isClickedShare);
    },[isClickedShare]);

    const onClickHeart = useCallback(()=>{
        setIsSelectedHeart(!isSelectedHeart);
    },[isSelectedHeart]);

    const onClickComment = useCallback(()=>{
        setIsSelectComment(true);
    },[isSelectComment]);

    const onClickInfo = useCallback(()=>{
        setIsSelectedInfo(!isSelectedInfo);
    },[isSelectedInfo]);

    return(
        <section className={"verticalSection"}>
            { isSelectedHeart ? <RiHeart3Fill onClick={onClickHeart} className={"sectionItem"}/> : <RiHeart3Line onClick={onClickHeart} className={"sectionItem"} /> }
            <RiQuestionAnswerLine onClick={onClickComment} className={"sectionItem"} />
            <RiShareForwardLine onClick={onClickShare} className={"sectionItem"} />
            <RiListUnordered onClick={onClickInfo} className={"sectionItem"} />
        </section>
    );
}

export default ShortFormVerticalSection;
