import React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import { Style } from '../types';

const ActiveTime: React.FC<Style> = ({ style }) => (
    <Svg viewBox="0 0 491 510" style={style}>
        <G fillRule="nonzero" fill="none">
            <Path
                d="M229.517 218.571V110.345c0-12.189 9.88-22.07 22.07-22.07 12.188 0 22.068 9.881 22.068 22.07V218.57h-44.138zM218.571 273.655h-72.916c-12.188 0-22.069-9.88-22.069-22.069 0-12.188 9.88-22.069 22.07-22.069h72.915v44.138z"
                fill="#95A5A5"
            />
            <Path
                d="M469.54 181.848l-.442.089c-10.918 3.494-22.694-1.953-27.1-12.536-32.3-75.058-105.664-124.153-187.368-125.384C172.927 42.787 98.117 89.649 63.572 163.7c-34.544 74.052-22.383 161.487 31.06 223.3l20.921-20.921a8.828 8.828 0 0115.007 5.297l5.826 52.612 3.62 32.927a8.828 8.828 0 01-9.71 9.71l-10.947-1.236-74.24-12.182a8.828 8.828 0 01-4.414-15.36l22.687-19.597c-66.033-74.523-81.88-180.987-40.412-271.51C64.437 56.216 155.407-1.318 254.967.014c99.56 1.332 188.96 61.279 227.99 152.879a21.698 21.698 0 01-13.418 28.954z"
                fill="#E25D04"
            />
            <Path
                d="M291.31 251.586c.01 17.024-10.83 32.162-26.95 37.636-16.119 5.475-33.935.07-44.295-13.44-10.36-13.508-10.961-32.116-1.494-46.265a38.038 38.038 0 0110.946-10.946 39.724 39.724 0 0161.793 33.015z"
                fill="#BDC3C7"
            />
            <G fill="#95A5A5">
                <Path d="M334.069 366.655H228.138a8.828 8.828 0 010-17.655h105.931a8.828 8.828 0 010 17.655zM308.931 410.793h-97.103a8.828 8.828 0 010-17.655h97.103a8.828 8.828 0 010 17.655zM281.966 454.931h-44.138a8.828 8.828 0 010-17.655h44.138a8.828 8.828 0 010 17.655z" />
            </G>
            <G fill="#F2BB80">
                <Path d="M409.099 260.294l6.022-14.135c4.436-10.407 16.465-15.251 26.877-10.821 10.407 4.435 15.251 16.465 10.821 26.876l-6.022 14.135c-4.435 10.407-16.465 15.251-26.877 10.821-10.412-4.44-15.251-16.47-10.821-26.876zM341.795 488.551l26.067.307 15.773-56.642h-29.959z" />
            </G>
            <Path
                d="M326.43 502.378a6.658 6.658 0 006.658 6.658h29.192l5.633-20.178-26.119-.307-12.394 8.245a6.714 6.714 0 00-2.97 5.582zM444.22 488.551h-26.17l5.685 20.485h29.192a6.658 6.658 0 006.657-6.658 6.712 6.712 0 00-2.97-5.582l-12.394-8.245z"
                fill="#EC6206"
            />
            <G fill="#F2BB80">
                <Path d="M431.725 432.216h-29.346l15.671 56.335h26.17zM363.611 254.814l44.76-24.94L398.385 212l-47.219 25.607a24.27 24.27 0 00-11.984 15.364 24.622 24.622 0 003.073 18.949l12.599 23.762 22.073-16.695-13.316-24.173z" />
            </G>
            <Path
                fill="#666"
                d="M423.735 396.367l-61.455-5.12-8.604 40.97h29.96l4.25-15.365h10.243l4.25 15.364h29.346z"
            />
            <Path
                fill="#E25D04"
                d="M387.886 299.062l-10.96-19.973-22.072 16.696 12.547 23.762v35.85l-5.121 35.85 61.455 5.12 15.364-87.062z"
            />
            <Path
                d="M376.722 392.424a240.548 240.548 0 01-19.563 22.636l-3.483 17.156h29.96l4.25-15.364h10.243l4.25 15.364h29.346l-7.99-35.849-47.013-3.943z"
                fill="#595959"
            />
            <Path
                d="M423.735 396.367l15.364-87.062-14.237-2.868a392.748 392.748 0 01-48.14 85.987l47.013 3.943zM439.1 309.305l-4.302 24.377 15.005 10.858 13.623-18.181z"
                fill="#D15705"
            />
            <Path
                d="M481.248 338.804l-17.822-12.445-13.623 18.18 14.903 10.858-36.617 16.285-4.353 24.685 53.006-20.485c10.929-4.204 16.378-16.475 12.168-27.404a21.228 21.228 0 00-7.662-9.776v.102z"
                fill="#F2BB80"
            />
        </G>
    </Svg>
);

export default ActiveTime;
