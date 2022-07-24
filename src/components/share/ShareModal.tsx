import React, {Dispatch, SetStateAction, useCallback} from "react";
import '../../styles/components/ShareModal.css';
import { RiCloseFill } from 'react-icons/ri';

interface ShareModalProps{
    isClickedShare : boolean;
    setIsClickedShare : Dispatch<SetStateAction<boolean>>;
}


function ShareModal({isClickedShare,setIsClickedShare}:ShareModalProps) : React.ReactElement{

    const onClickCloseButton = useCallback(()=>{
        setIsClickedShare(false);
    },[isClickedShare])

    return(
        <div className={"shareModalContainer"}>
            <div className={"shareTitleContainer"}>
                {/* Share Modal 가장 상단 */}
                {/* 닫기 버튼 */}
                <h2 className={"shareTitleItem"}>공유</h2>
                <RiCloseFill onClick={onClickCloseButton} className={"closeButton shareTitleItem"} />
            </div>

            <div className={"shareButtonContainer"}>
                {/* 공유할 여러가지 방법들 */}
            </div>
        </div>
    );
}

export default ShareModal;
