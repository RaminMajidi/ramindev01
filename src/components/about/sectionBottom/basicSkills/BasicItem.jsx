
const BasicItem = ({ title, url }) => {
    return (
        <div className="max-w-[60px] mx-2 my-4">
            <img
                className="w-full"
                src={url}
                alt={title}
                title={title}
            />
        </div>
    )
}

export default BasicItem