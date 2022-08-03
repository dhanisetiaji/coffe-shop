import React from 'react'
import IndexCheckout from '../../layouts/checkout'
import HeadLayout from '../../layouts/head'

const IndexPages = () => {
    return (<>
        <HeadLayout title={"Checkout"} />
        <IndexCheckout />
    </>)
}

export default IndexPages