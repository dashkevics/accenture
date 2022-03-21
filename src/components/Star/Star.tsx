import {CSSProperties, FC} from "react";
import "./Star.sass";

export const enum EStarColor {
    greenColor = "#03FD39",
    redColor = "#FF003D",
    basicColor = "#FFF59F"
}

export const Star: FC<{ color?: EStarColor, onStarClick?: any, style?: CSSProperties }> =
    ({
         color,
         onStarClick,
         style
     }) => {
        return (
            <div onClick={color === EStarColor.basicColor && onStarClick}
                 style={style}>
                <svg width="56" height="53" viewBox="0 0 56 53" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M25.1468 2.78114C26.0449 0.0172105 29.9551 0.0172195 30.8532 2.78115L35.1844 16.1115C35.5861 17.3475 36.7379 18.1844 38.0376 18.1844L52.0539 18.1844C54.9601 18.1844 56.1684 21.9033 53.8173 23.6115L42.4778 31.85C41.4264 32.614 40.9864 33.9681 41.388 35.2041L45.7193 48.5345C46.6174 51.2984 43.4539 53.5967 41.1028 51.8885L29.7634 43.65C28.7119 42.886 27.2881 42.886 26.2366 43.65L14.8972 51.8886C12.5461 53.5968 9.38263 51.2984 10.2807 48.5344L14.612 35.2041C15.0136 33.9681 14.5736 32.614 13.5222 31.85L2.18271 23.6115C-0.168434 21.9032 1.0399 18.1844 3.94607 18.1844L17.9624 18.1844C19.2621 18.1844 20.4139 17.3475 20.8156 16.1115L25.1468 2.78114Z"
                        fill={color}/>
                </svg>
            </div>
        )
    }