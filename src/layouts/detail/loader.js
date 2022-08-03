import ContentLoader from "react-content-loader"

export const ImgLoader = (props) => (
    <ContentLoader
        speed={2}
        width={300}
        height={300}
        viewBox="0 0 300 300"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="161" cy="155" r="124" />
    </ContentLoader>
)

export const Content = (props) => (
    <ContentLoader
        speed={2}
        width={400}
        height={144}
        viewBox="0 0 400 144"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="9" y="10" rx="0" ry="0" width="374" height="123" />
    </ContentLoader>
)