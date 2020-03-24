import Link from 'next/link';
import { Button } from 'antd';

interface LayoutProps { }


const Layout: React.FC<LayoutProps> = (props) => {

    const {
        children
    } = props;

    console.log('component Layout render..');

    return (
        <>
            <header>
                <Link href='/home' >
                    <Button>go home</Button>
                </Link>
                <Link href='/t/list' >
                    <Button>go list</Button>
                </Link>
            </header>
            {
                children
            }
        </>
    )
}


export default Layout;