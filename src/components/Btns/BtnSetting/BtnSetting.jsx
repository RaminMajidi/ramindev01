import React from 'react'
import { useAppContext } from '../../../context/app/AppContext'

const BtnSetting = () => {
    const { showSetting, toggleSetting } = useAppContext()

    const toggleHandler = () => {
        setTimeout(() => {
            toggleSetting()
        }, 200)
    }
    return (
        <>

            <div id='btn_setting'
                className="absolute flex justify-center items-center
                       w-12 h-12 bg-[var(--color-gray)] rounded-full 
                       top-1 left-1 cursor-pointer">
                <button
                    onClick={toggleSetting}
                    onBlur={toggleHandler}
                    className={`flex justify-center  items-center ${showSetting ? '' : 'animate-spin-slow '}`}>
                    <box-icon name='cog' type='solid' color="#fff" size='md'></box-icon>
                </button>
            </div>
        </>
    )
}

export default BtnSetting