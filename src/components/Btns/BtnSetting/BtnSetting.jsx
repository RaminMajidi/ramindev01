import React from 'react'
import { useAppContext } from '../../../context/app/AppContext'
import SettingMenu from '../../design/SettingMenu/SettingMenu'

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
                    className='flex justify-center items-center animate-spin-slow '>
                    <box-icon name='cog' type='solid' color="#fff" size='sm'></box-icon>
                </button>
            </div>
            {
                showSetting &&
                <SettingMenu />
            }
        </>
    )
}

export default BtnSetting