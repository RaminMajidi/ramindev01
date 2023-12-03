import React from 'react'
import { SocialItem } from './SocialItem'
import { useAppContext } from '../../context/app/AppContext'

const SocialList = ({ data }) => {
    console.log(data);
    const { language } = useAppContext()
    return (
        <div className='flex justify-start items-center p-2 my-2'>
            {data?.map(item => (
                <SocialItem
                    iconName={item.iconName}
                    iconType={item.iconType}
                    title={item[language + "_title"]}
                    link={item.link}
                />
            ))}
        </div>
    )
}

export default SocialList