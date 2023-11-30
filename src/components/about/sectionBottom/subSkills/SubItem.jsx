
export const SubItem = ({ title, url }) => {
    return (
        <div className="max-w-[50px] mx-2 my-4">
            <img
                className="w-full"
                src={url}
                alt={title}
                title={title}
            />
        </div>
    )
}
