import React from 'react'
import useHover from './hooks/UseHover'

const Menu = () => {
  const [hover, mouseOver, mouseOut] = useHover();

    return (
        <div>
            <h1>Menu</h1>
            {
                hover ? <h3>เมนูหลัก</h3> : null
            }
            <img onMouseOver={mouseOver} onMouseOut={mouseOut} src="../img/logo192.png" alt="logo" />
        </div>
    )
}

export default Menu
