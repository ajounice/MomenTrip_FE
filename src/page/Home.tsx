import React, {useEffect, useState} from 'react';
import "@/styles/pages/Home.css";
import ShortFormVerticalSection from "@/components/common/ShortFormVerticalSection";
import CommentModal from "@/components/comment/CommentModal";
import ShareModal from "@/components/share/ShareModal";
import InformationModal from "@/components/info/InformationModal";

function Home() {
    const [ isSelectComment , setIsSelectComment ] = useState<boolean>(false);
    const [ isClickedShare , setIsClickedShare ] = useState<boolean>(false);
    const [ isSelectedHeart , setIsSelectedHeart ] = useState<boolean>(false);
    const [ isSelectedInfo, setIsSelectedInfo ] = useState<boolean>(false);
    const [ isCollected, setIsCollected ] = useState<boolean>(false);

    useEffect(()=>{
        console.log("Home");
    },[isSelectComment, isClickedShare, isSelectedInfo]);

    return(
        <div className={"container"}>
            <ShortFormVerticalSection  isSelectedInfo={isSelectedInfo} setIsSelectedInfo={setIsSelectedInfo} isSelectedHeart={isSelectedHeart} setIsSelectedHeart={setIsSelectedHeart} isClickedShare={isClickedShare} setIsClickedShare={setIsClickedShare} isSelectComment={isSelectComment} setIsSelectComment={setIsSelectComment} />
            { isClickedShare ? <ShareModal isClickedShare={isClickedShare} setIsClickedShare={setIsClickedShare} /> : null}
            { isSelectedInfo ? <InformationModal setIsCollected={setIsCollected} isCollected={isCollected} isSelectedInfo={isSelectedInfo} setIsSelectedInfo={setIsSelectedInfo} /> : null}
            { isSelectComment ? <CommentModal  isSelectComment={isSelectComment} setIsSelectComment={setIsSelectComment}/> : null }

        </div>
    )
}

export default Home;

