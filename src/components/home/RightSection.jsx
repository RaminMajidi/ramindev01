import BlobSvg from "../design/BlobSvg/BlobSvg"

const RightSection = ({imgUrl}) => {
    return (
        <article className="relative w-full mx-auto md:w-1/2 md:max-w-[500px]">
            <BlobSvg />
            <div className="absolute top-0 left-4">
                <img
                    className="w-full"
                    src={imgUrl} />
            </div>
        </article>
    )
}

export default RightSection