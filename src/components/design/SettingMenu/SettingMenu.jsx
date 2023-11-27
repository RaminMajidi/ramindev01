import React from 'react'
import { useAppContext } from '../../../context/app/AppContext'


const COLORS = ['#0087ff', '#FF9209', '#7752FE', '#F4CE14']

const SettingMenu = () => {
    const { showSetting, toggleSetting, changeColor } = useAppContext()
    return (
        <div className={`w-44 h-44 backdrop-blur-xl absolute top-4 left-14 transition-all`}>
            {COLORS.map(color => (
                <span
                    key={color}
                    onClick={() => changeColor(color)}
                    className='inline-block cursor-pointer mx-1 my-2'>
                    <box-icon
                        size='md'
                        type='solid'
                        name='droplet-half'
                        color={color}>
                    </box-icon>
                </span>
            )
            )}
        </div>
    )
}

export default SettingMenu