import { createPortal } from 'react-dom'
import './Modal.css'

const Modal = ({ isToggle, open, title, children }) => {

    return (
        <>
            {open &&
                createPortal(
                    <div
                        onClick={() => isToggle()}
                        style={{ display: 'block' }}
                        className={`modal ${open ? 'open' : ''}`}>
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className='modal-dialog'
                        >
                            <div className="modal-content">
                                <div className="modal-header">
                                    <span
                                        className='modla-btn-close'
                                        onClick={() => isToggle()}>
                                        <box-icon
                                            size='md'
                                            name='x-circle'
                                            color='#d41a1a'
                                        ></box-icon>
                                    </span>
                                    <h5 className='modal-title'>{title}</h5>
                                </div>
                                {children}
                            </div>
                        </div>
                    </div>,
                    document.getElementById('modal')
                )
            }
        </>
    )
}

export default Modal