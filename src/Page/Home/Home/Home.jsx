import React from 'react';
import Slider from '../Slider/Slider';
import LastestBookSection from '../LastestBookSection/LastestBookSection';
import CoverageSection from '../CoverageSection/CoverageSection';
import Choose from '../Choose/Choose';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <LastestBookSection></LastestBookSection>
            <CoverageSection></CoverageSection>
            <Choose></Choose>
        </div>
    );
};

export default Home;