import React from 'react'
import "./Header.css"

const Header = ({ text, add, edit, editBlock }) => {
    return (
        <div className='header'>
            <p>{text}</p>
            <div className='head-svg'>
                <div className={editBlock === true ? 'edit' : ""} onClick={edit}>
                    <svg width="12" height="13" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.75002 15.75H2.74002L12.7075 5.78251L11.7175 4.79251L1.75002 14.76V15.75ZM15.565 4.81501L12.685 1.93501L13.63 0.990013C13.885 0.735013 14.2 0.607513 14.575 0.607513C14.95 0.607513 15.265 0.735013 15.52 0.990013L16.51 1.98001C16.765 2.23501 16.8925 2.55001 16.8925 2.92501C16.8925 3.30001 16.765 3.61501 16.51 3.87001L15.565 4.81501ZM14.62 5.76001L3.28002 17.1H0.400024V14.22L11.74 2.88001L14.62 5.76001ZM12.2125 5.28751L11.7175 4.79251L12.7075 5.78251L12.2125 5.28751Z" fill="#2F9FD8" />
                    </svg>
                </div>
                <div onClick={add}>
                    <svg width="14" height="13" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.8925 13.5H10.2425V9.765H14V8.415H10.2425V4.5H8.8925V8.415H5V9.765H8.8925V13.5ZM9.50599 18C8.26498 18 7.09873 17.7638 6.00724 17.2913C4.91575 16.8188 3.96125 16.1738 3.14375 15.3563C2.32625 14.5388 1.68125 13.5837 1.20875 12.4911C0.73625 11.3985 0.5 10.231 0.5 8.98875C0.5 7.74647 0.73625 6.57902 1.20875 5.48642C1.68125 4.39381 2.32625 3.4425 3.14375 2.6325C3.96125 1.8225 4.91631 1.18125 6.00892 0.70875C7.10152 0.23625 8.26897 0 9.51125 0C10.7535 0 11.921 0.23625 13.0136 0.70875C14.1062 1.18125 15.0575 1.8225 15.8675 2.6325C16.6775 3.4425 17.3188 4.395 17.7913 5.49C18.2638 6.585 18.5 7.75301 18.5 8.99402C18.5 10.235 18.2638 11.4013 17.7913 12.4928C17.3188 13.5843 16.6775 14.5374 15.8675 15.3521C15.0575 16.1669 14.105 16.8119 13.01 17.2871C11.915 17.7624 10.747 18 9.50599 18ZM9.51125 16.65C11.6338 16.65 13.4375 15.9038 14.9225 14.4113C16.4075 12.9188 17.15 11.1113 17.15 8.98875C17.15 6.86625 16.4089 5.0625 14.9267 3.5775C13.4445 2.0925 11.6356 1.35 9.5 1.35C7.385 1.35 5.58125 2.09109 4.08875 3.57327C2.59625 5.05547 1.85 6.86438 1.85 9C1.85 11.115 2.59625 12.9188 4.08875 14.4113C5.58125 15.9038 7.38875 16.65 9.51125 16.65Z" fill="#2F9FD8" />
                    </svg>
                </div>
                <div>
                    <svg width="10" height="8" viewBox="0 0 15 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.37673 3.08001C1.07886 3.08001 0.824927 2.97395 0.614927 2.76182C0.404927 2.5497 0.299927 2.2947 0.299927 1.99682C0.299927 1.69895 0.405992 1.44501 0.618122 1.23501C0.830237 1.02501 1.08524 0.920013 1.38312 0.920013C1.68099 0.920013 1.93493 1.02608 2.14493 1.23821C2.35493 1.45032 2.45993 1.70532 2.45993 2.00321C2.45993 2.30108 2.35386 2.55501 2.14173 2.76501C1.92962 2.97501 1.67462 3.08001 1.37673 3.08001ZM7.49673 3.08001C7.19886 3.08001 6.94493 2.97395 6.73493 2.76182C6.52493 2.5497 6.41993 2.2947 6.41993 1.99682C6.41993 1.69895 6.52599 1.44501 6.73812 1.23501C6.95024 1.02501 7.20524 0.920013 7.50312 0.920013C7.80099 0.920013 8.05493 1.02608 8.26493 1.23821C8.47493 1.45032 8.57993 1.70532 8.57993 2.00321C8.57993 2.30108 8.47386 2.55501 8.26173 2.76501C8.04962 2.97501 7.79462 3.08001 7.49673 3.08001ZM13.6167 3.08001C13.3189 3.08001 13.0649 2.97395 12.8549 2.76182C12.6449 2.5497 12.5399 2.2947 12.5399 1.99682C12.5399 1.69895 12.646 1.44501 12.8581 1.23501C13.0702 1.02501 13.3252 0.920013 13.6231 0.920013C13.921 0.920013 14.1749 1.02608 14.3849 1.23821C14.5949 1.45032 14.6999 1.70532 14.6999 2.00321C14.6999 2.30108 14.5939 2.55501 14.3817 2.76501C14.1696 2.97501 13.9146 3.08001 13.6167 3.08001Z" fill="#2F9FD8" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Header