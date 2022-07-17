import React, {Dispatch, ReactElement, SetStateAction, useState} from "react";
import '@/styles/components/Navigator.css';
import { Link } from "react-router-dom";
import { RiNotification2Line } from "react-icons/ri";
import classNames from "classnames";

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
                <div className={"NavTabContainer"}>
                    {/*팔로잉/홈/검색*/}
                    <h2><Link onClick={onClickHandler} to={"/home"} className={currentPage} id={"idFollowing"}>팔로잉</Link></h2>
                    <h2><Link onClick={onClickHandler} to={"/home"} className={currentPage} id={"idHome"}>홈</Link></h2>
                    <h2><Link onClick={onClickHandler} to={"/home"} className={currentPage} id={"idSearch"}>검색</Link></h2>

                </div>
                <div className={"alarmContainer"}>
                    {/* 알림 */}
                    <RiNotification2Line />
                </div>
            </section>
    );
}

export default Navigator;
