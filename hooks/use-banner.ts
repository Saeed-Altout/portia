import * as React from "react";
export const useBanner = () => {
  const [isClose, setIsClose] = React.useState<boolean>(false);

  const onClose = () => {
    setIsClose(true);
    localStorage.setItem("bannerState", "close");
  };

  React.useEffect(() => {
    const bannerState = localStorage.getItem("bannerState");
    if (bannerState) {
      setIsClose(true);
    }
  }, []);

  return { isClose, onClose };
};
