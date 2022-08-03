import DetailLayout from "../../layouts/detail"
import HeadLayout from "../../layouts/head"

const Detail = ({ mySlug }) => {

    // console.log(data, 'slug');
    return (<>
        <HeadLayout title={"Cold Brew"} />
        <DetailLayout slug={mySlug} />
    </>
    )
}

export async function getServerSideProps(context) {
    const { slug } = context.params
    const { voucher } = context.query
    let mySlug = {
        slug
    }
    if (voucher !== undefined) {
        mySlug = {
            ...mySlug,
            voucher
        }

    }

    // console.log(mySlug, 'slug1');

    return {
        props: { mySlug }
    }
}

export default Detail