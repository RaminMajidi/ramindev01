import { useAppContext } from '../../../context/app/AppContext'
import "./SettingMenu.css"

const COLORS = ['#0087ff', '#FF9209', '#7752FE', '#F4CE14','#FF0303']

const SettingMenu = () => {
    const { showSetting, changeColor } = useAppContext()
    return (
        <div className={`flex justify-around h-12 items-center bg-[var(--color-gray)]
         absolute top-3 pr-2 pl-10 transition-all rounded-full z-10
          color_items backdrop-blur-xl ${showSetting ? 'open' : 'close'} `}>
            {COLORS.map((color, index) => (
                <span
                    key={color}
                    onClick={() => changeColor(color)}
                    className='flex justify-center items-center cursor-pointer'>
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