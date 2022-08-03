import Head from 'next/head'
import React from 'react'

const HeadLayout = ({ title }) => {
    return (<>
        <Head>
            <meta charset="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans" />
            <title>{title} | Coffe shop</title>
            <link rel="icon" type="image/x-icon" href="/img/logo-coffe.svg" />

        </Head>
    </>
    )
}

export default HeadLayout