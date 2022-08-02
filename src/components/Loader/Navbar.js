import ContentLoader from "react-content-loader"

const Navbar = (props) => (
    <ContentLoader
        speed={2}
        width={125}
        height={60}
        viewBox="0 0 125 60"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="84" cy="30" r="25" />
        <circle cx="165" cy="179" r="19" />
        <rect x="19" y="21" rx="0" ry="0" width="24" height="23" />
    </ContentLoader>
)

export default Navbar