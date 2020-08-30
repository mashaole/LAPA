import React from 'react';
import Masonry from './Masonry'

let brakePoints = [350, 500, 750];
let images = [];
const imgId = [1011, 883, 1074, 823, 64, 65, 85, 314, 256, 316, 92, 643];
for (let i = 0; i < imgId.length; i++) {
    const ih = 200 + Math.floor(Math.random() * 10) * 15;
    images.push("https://unsplash.it/250/" + ih + "?image=" + imgId[i]);
}

const Tile = ({ src }) => {
    return (
        <div className="tile">
            <img src={src} alt="food pictures" />
        </div>
    );
};

const MasonryLayout = () => {
    return (
        <div className="masonry-container">
            <Masonry brakePoints={brakePoints}>
                {images.map((image, id) => {
                    return (
                        <Tile src={image} />
                    )
                })}
            </Masonry>
            <div className="masonryTiltle">
                <h1>LAPA</h1>
                ARTISIAN<br />
                CONDIMENTS
            </div>
        </div>
    )
}

export default MasonryLayout;