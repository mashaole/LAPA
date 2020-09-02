import React from 'react';
import Masonry from './Masonry'

let brakePoints = [350, 500, 750];
let images = ["https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/118487983_2595141037406906_4603169776783189636_n.jpg?_nc_cat=103&_nc_sid=84a396&_nc_ohc=c1dyGDAwMUYAX8SF97l&_nc_ht=scontent-jnb1-1.xx&oh=1e7cbbba3e55ee31a15222bf5f4eb8f5&oe=5F76A0FB",
    "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/118723739_2594246240829719_6943019295422265918_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=zboEs4aElgoAX8AjaE9&_nc_ht=scontent-jnb1-1.xx&oh=9f450d339ef97352f3636e8b3a6d31be&oe=5F767C52",
    "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/117357266_2579512908969719_248271892073847267_o.jpg?_nc_cat=108&_nc_sid=730e14&_nc_ohc=gkUp7xnYGZUAX-X3XVb&_nc_ht=scontent-jnb1-1.xx&oh=d25665d19c89e87cd5d50e1d4d753713&oe=5F76987D",
    "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/117676547_2576198379301172_9147794301329679119_o.jpg?_nc_cat=110&_nc_sid=84a396&_nc_ohc=jZWxw2FIh0UAX8a-fGM&_nc_ht=scontent-jnb1-1.xx&oh=7a7abe01c4c5b73aba296d738d7eb885&oe=5F768BBC",
    "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/99358079_2512451212342556_8490113139654787072_o.jpg?_nc_cat=111&_nc_sid=84a396&_nc_ohc=RI7GrNA91SIAX-ovs2E&_nc_ht=scontent-jnb1-1.xx&oh=07ddf0421e153e7ad7ab9ca5c899fc17&oe=5F7717C4",
    "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/99295192_2511526565768354_5888688522625286144_o.jpg?_nc_cat=108&_nc_sid=84a396&_nc_ohc=lNKuHsJTvVgAX8pxHeX&_nc_ht=scontent-jnb1-1.xx&oh=6e5a2f3dbbb9159c7863f3dc3a1da3a0&oe=5F73EBC2",
    "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/118523727_2594554477465562_218504553902537276_n.jpg?_nc_cat=101&_nc_sid=84a396&_nc_ohc=QpBMOsT_sCEAX9R4U_Y&_nc_ht=scontent-jnb1-1.xx&oh=06f6f41ea8812ea24403f400a969b64c&oe=5F766F5D",
    "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/13315736_1690205884567097_5846669423539548577_n.jpg?_nc_cat=102&_nc_sid=a9b1d2&_nc_ohc=wmzR5XClzTgAX-oYLpC&_nc_ht=scontent-jnb1-1.xx&oh=fde5ed7bb9b3910b815ef830f5c20d9c&oe=5F76AB86"];

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