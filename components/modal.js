import React, { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import { HiOutlineX } from "react-icons/hi";

const Modal = ({ onClose, children, title, bgImage }) => {
    const modalWrapperRef = React.useRef();

    const backDropHandler = useCallback(e => {
        if (!modalWrapperRef?.current?.contains(e.target)) {
            onClose();
        }
    }, []);

    useEffect(() => {
        setTimeout(() => {
            window.addEventListener('click', backDropHandler);
        })
    }, [])

    useEffect(() => {
        return () => window.removeEventListener('click', backDropHandler);
    }, []);

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center z-[60]">
            <div className="modal-overlay">
                <div ref={modalWrapperRef} className="modal-wrapper">
                    <div className="modal">
                        <div className="modal-header">
                            <a href="#" onClick={handleCloseClick} className=" absolute right-4 top-4">
                                <HiOutlineX size={30} />
                            </a>
                            <img src={bgImage} className="h-full w-auto rounded-lg" />
                        </div>
                        {/* {title && <h1>{title}</h1>}
                    <div className="modal-body">{children}</div> */}
                    </div>
                </div>
            </div>
        </div>
    );

    return modalContent;

    // return ReactDOM.createPortal(
    //     modalContent,
    //     document.getElementById("modal-root")
    // );
};

export default Modal