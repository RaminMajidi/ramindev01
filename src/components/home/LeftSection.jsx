import BtnDownload from "../Btns/BtnDownload/BtnDownload"

const LeftSection = ({ title, subTitle, desc }) => {
    return (
        <article className="relative  pb-2 md:w-1/2">
            <h1 className="text-xl md:text-3xl mb-6 font-bold text-[var(--color-primary)]">
                {title}
            </h1>
            <h2 className="text-lg md:text-2xl mb-2 ">
                {subTitle}
            </h2>
            <h5 className="text-base md:text-lg mb-2 text-justify">
                {desc}
            </h5>
            <BtnDownload />
        </article>
    )
}

export default LeftSection