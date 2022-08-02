import Link from 'next/link'

export default function FourOhFour() {
    return <>
        <center><h1>404 - Page Not Found</h1>
            <Link href="/">
                <a>
                    Go back home
                </a>
            </Link></center>
    </>
}