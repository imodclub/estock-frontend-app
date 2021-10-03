import React from "react";

function useHover() {
      const [hover, setHover] = React.useState(false);

      const mouseOver = () => {
        setHover(true);
      };

      const mouseOut = () => {
        setHover(false);
      };
    
    // const attrs = {
    //     mouseOver: mouseOver,
    //     mouseOut : mouseOut
    // }
    
    return [hover, mouseOver, mouseOut]
}

export default useHover