import React from 'react'

function Modal(props) {
    return (
        <div
            className={props.showModalDialog
            ? 'showModal'
            : 'modal modal__' + props.type}>
            <div className="modal__container">
                <div className="modal__header">
                    <p>{props.content.header}</p>
                    <button className="close" onClick={props.hideModal}>
                        <i className="fa fa-times-circle" aria-hidden="true"></i>
                    </button>
                </div>
                <div className="modal__content">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Modal
