import React, {useEffect, useState} from 'react';
import "@/styles/pages/Home.css";
import ShortFormVerticalSection from "@/components/ShortFormVerticalSection";
import CommentModal from "@/components/comment/CommentModal";
import ShareModal from "@/components/share/ShareModal";

function Home() {
    const [ isSelectComment , setIsSelectComment ] = useState<boolean>(false);
    const [ isClickedShare , setIsClickedShare ] = useState<boolean>(false);


    useEffect(()=>{
        console.log("Home");
    },[isSelectComment, isClickedShare])

    return(
        <div className={"container"}>
            <ShortFormVerticalSection isClickedShare={isClickedShare} setIsClickedShare={setIsClickedShare} isSelectComment={isSelectComment} setIsSelectComment={setIsSelectComment} />
                home
            { isClickedShare ? <ShareModal isClickedShare={isClickedShare} setIsClickedShare={setIsClickedShare} /> : <h1>share</h1>}
            { isSelectComment ? <CommentModal isSelectComment={isSelectComment} setIsSelectComment={setIsSelectComment} /> : <h1>comment</h1>}
        </div>
    )
}

export default Home;

