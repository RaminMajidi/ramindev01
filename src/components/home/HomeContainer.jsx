
const HomeContainer = ({children }) => {
    return (
        <section
            className={`w-full h-full flex flex-col items-center px-8
              md:justify-center md:flex-row-reverse `}
        >
            {children}
        </section>
    )
}

export default HomeContainer