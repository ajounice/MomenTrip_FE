import React, {Dispatch, ReactElement, SetStateAction, useState} from "react";
import '@/styles/components/Navigator.css';
import { Link } from "react-router-dom";
import { RiNotification2Line } from "react-icons/ri";

interface NavProps{
    currentPage : string;
    setCurrentPage : Dispatch<SetStateAction<string>>;
}

function Navigator({currentPage , setCurrentPage} : NavProps) : ReactElement<NavProps> {

    const onClickHandler = (e : React.MouseEvent) => {
        e.preventDefault();
        const id = e.currentTarget.id;
        if(id === "idHome"){
            setCurrentPage("home");
        }
        else if( id === "idFollowing"){
            setCurrentPage("following");}
        else{
            setCurrentPage("search");
        }
    }

    return(
            <section className={"NavSection"}>
                <div className={"tmp"}> </div>

                <div className={"NavTabContainer"}>
                    {/*팔로잉/홈/검색*/}
                    <h2 id={"idFollowing"} onClick={onClickHandler}><Link to={"/following"} className={currentPage}>팔로잉</Link></h2>
                    <h2 id={"idHome"} onClick={onClickHandler}><Link to={"/home"} className={currentPage}>홈</Link></h2>
                    <h2  id={"idSearch"} onClick={onClickHandler}><Link to={"/search"} className={currentPage}>검색</Link></h2>

                </div>
                <div className={"alarmContainer"}>
                    {/* 알림 */}
                    <RiNotification2Line />
                </div>
            </section>
    );
}

export default Navigator;
