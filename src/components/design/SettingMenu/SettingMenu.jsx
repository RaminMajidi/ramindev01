import React from 'react'
import { useAppContext } from '../../../context/app/AppContext'


const COLORS = ['#0087ff', '#FF9209', '#7752FE', '#F4CE14']

const SettingMenu = () => {
    const { changeColor } = useAppContext()
    return (
        <div className={`flex justify-around items-center
         absolute top-2 left-14 transition-all rounded-xl backdrop-blur-xl`}>
            {COLORS.map(color => (
                <span
                    key={color}
                    onClick={() => changeColor(color)}
                    className='inline-block cursor-pointer'>
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