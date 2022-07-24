import React, {useEffect} from "react";
import * as config from "../../config";
import {KAKAO_API_KEY} from "../../config";
import styled from "styled-components";

interface MapProps {
    latitude: number; // 위도
    longitude: number; // 경도
}

const Map = styled.div`
  width : 100%;
  height : 100%;

`;

function MapComponent({latitude,longitude}: MapProps){

    useEffect(()=>{
        const mapScript = document.createElement("script");
        mapScript.async = true;
        console.log("kakao key : ",`${config.KAKAO_API_KEY}`);
        mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${config.KAKAO_API_KEY}&autoload=false`;
        document.head.appendChild(mapScript);
        const onLoadKakaoMap = () => {
            window.kakao.maps.load(()=>{
                const container = document.getElementById("map");
                const options = {
                    center : new window.kakao.maps.LatLng(latitude,longitude),
                };

                const map = new window.kakao.maps.Map(container,options);
                const markerPosition = new window.kakao.maps.LatLng(latitude,longitude);
                const marker = new window.kakao.maps.Marker({
                    position : markerPosition,
                });
                marker.setMap(map);
            });
        };
        mapScript.addEventListener("load", onLoadKakaoMap);

        return() => mapScript.removeEventListener("load",onLoadKakaoMap);
    },[latitude,longitude]);

    return(
        <Map id={"map"} />
    );
}

export default MapComponent;
