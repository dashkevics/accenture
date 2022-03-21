import React, {CSSProperties, FC} from "react";
import "./Modal.sass";
import CloseButton from "../../assets/images/close-icon.svg";

interface IModal {
    handleClose?: () => void;
    onOutsideClick?: () => void;
    isCloseButtonShow: boolean;
    show: boolean;
    wrapperStyle?: CSSProperties;
    modalStyle?: CSSProperties;
}

export const Modal: FC<IModal> = ({
                                      handleClose,
                                      show,
                                      children,
                                      wrapperStyle,
                                      modalStyle,
                                      onOutsideClick,
                                      isCloseButtonShow
                                  }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName} style={modalStyle}
             onClick={onOutsideClick}>
            <div className={"modal-wrapper"} style={wrapperStyle}>
                {isCloseButtonShow &&
                <img className={"modal-wrapper-close-button"}
                     src={CloseButton}
                     onClick={handleClose}
                     alt={"close button"}/>}
                {children}
            </div>
        </div>
    )
}