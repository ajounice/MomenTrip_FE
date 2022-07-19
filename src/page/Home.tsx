import React, {useEffect, useState} from 'react';
import "@/styles/pages/Home.css";
import ShortFormVerticalSection from "@/components/ShortFormVerticalSection";
import CommentModal from "@/components/comment/CommentModal";

function Home() {
    const [ isSelectComment , setIsSelectComment ] = useState<boolean>(false);
    useEffect(()=>{
        console.log("Home");
    },[isSelectComment])

    return(
        <div className={"container"}>
            <ShortFormVerticalSection isSelectComment={isSelectComment} setIsSelectComment={setIsSelectComment} />
                home

            { isSelectComment ? <CommentModal isSelectComment={isSelectComment} setIsSelectComment={setIsSelectComment} /> : <h1>d</h1>}
        </div>
    )
}

export default Home;

