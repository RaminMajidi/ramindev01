import irFlag from '../../../assets/images/ir.svg'
import enFlag from '../../../assets/images/us.svg'
import LanguageItem from './LanguageItem'


const SelectLanguage = () => {

    return (
        <div className='flex justify-between items-center'>
            <label className='text-lg text-[var(--color-text)]'>انتخاب زبان</label>
            <div className='flex'>
                <LanguageItem
                    alt='Persian'
                    src={irFlag}
                    language='fa'
                    title={'فارسی'}
                />
                <LanguageItem
                    alt='English'
                    src={enFlag}
                    language='en'
                    title={'انگلیسی'}
                />
            </div>
        </div>
    )
}

export default SelectLanguage