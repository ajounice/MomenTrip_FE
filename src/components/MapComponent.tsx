import React, {useEffect} from "react";
import '../styles/components/MapComponent.css';

interface MapProps {
    latitude: number; // 위도
    longitude: number; // 경도
}

function MapComponent({latitude,longitude}: MapProps) : React.ReactElement{

    useEffect(()=>{
        const mapScript = document.createElement("script");
        mapScript.async = true;
        mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=1355d6cec4965dead62382093a1f5313&autoload=false`;

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
            });
        };

        mapScript.addEventListener("load", onLoadKakaoMap);

        return() => mapScript.removeEventListener("load",onLoadKakaoMap);
    },[latitude,longitude]);

    return(
        <div>
            <div id={"map"} >
                map
            </div>

        </div>
    );
}

export default MapComponent;
