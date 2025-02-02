import React from 'react';
import { Container as MapDiv, NaverMap, Marker, useNavermaps } from 'react-naver-maps';

function Main() {
	return (
		<>
			<h3>최신 공실 현황</h3>
            <div class="maps">
            <MapDiv
            style={{
                width: '100%',
                height: '400px',
            }}
            >
            <NaverMap />
            </MapDiv>
            </div>
		</>
	);
    
};

export default Main;