import BlobSvg from "../design/BlobSvg/BlobSvg"

const RightSection = ({imgUrl}) => {
    return (
        <article className="relative w-3/4 mx-auto md:w-1/2 md:max-w-[500px]">
            <BlobSvg />
            <div className="absolute top-0 left-0 ">
                <img
                    className="w-full"
                    src={imgUrl} />
            </div>
        </article>
    )
}

export default RightSection