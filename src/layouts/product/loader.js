import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={250}
        height={200}
        viewBox="0 0 250 200"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="19" y="21" rx="0" ry="0" width="134" height="142" />
    </ContentLoader>
)

export default MyLoader