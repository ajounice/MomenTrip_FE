import React from 'react';
import "../../styles/components/BottomNavigator.css"
import { RiInboxArchiveLine, RiVideoAddLine,RiUser3Line } from 'react-icons/ri';

function BottomNavigator(){
    return(
        <div className={"bottomNavigatorContainer"}>
            <RiInboxArchiveLine className={"bottomNavigationIcon"} />
            <RiVideoAddLine className={"bottomNavigationIcon"} />
            <RiUser3Line className={"bottomNavigationIcon"} />
        </div>
    );
}

export default BottomNavigator;
