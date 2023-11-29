import { createPortal } from 'react-dom'
import './Modal.css'

const Modal = ({ isToggle, open, title, btnTitle, children }) => {

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
                                    <h5 className='modal-title'>{title}</h5>
                                    <span
                                        title={btnTitle}
                                        className='modla-btn-close'
                                        onClick={() => isToggle()}>
                                        <box-icon
                                            size='md'
                                            name='x-circle'
                                            color='var(--color-gray)'
                                        ></box-icon>
                                    </span>
                                </div>
                                <div className='px-2 py-1'>
                                    {children}
                                </div>
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