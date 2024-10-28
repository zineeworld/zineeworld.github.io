"use client";

import React, {ReactNode} from 'react'
import {useEffect, useState} from 'react';

export const Cursor = () => {

  const [cursorStyle, setCursorStyle] = useState({
    left: 0,
    top: 0,
    display: 'none',
  });

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setCursorStyle({
        left: `${e.pageX}px`,
        top: `${e.pageY}px`,
        display: 'block',
      });
    };

    const handleMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget) { // 윈도우 바깥으로 커서가 나갔을 때
        setCursorStyle((prev) => ({ ...prev, display: "none" }));
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div className="cursorImage" style={cursorStyle}>
      <img src="/cursor-image.png" alt="Cursor" width="40" height="40"/>
    </div>
  )
}