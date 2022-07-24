import React from "react";

interface CommentItemProps{
    name : string;
    commentedTime : number;
    profileImage : string;
    comment : string;
}


function CommentItem({ name, commentedTime, profileImage, comment }: CommentItemProps) : React.ReactElement{
    return(
        <div>
            Comment
        </div>
    );
}

export default CommentItem;
