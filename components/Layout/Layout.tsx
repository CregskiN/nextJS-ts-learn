import Link from 'next/link';
import { Button } from 'antd';

interface LayoutProps { }


const Layout: React.FC<LayoutProps> = (props) => {

    const {
        children
    } = props;

    console.log('component Layout render..');

    return (
        <div>
            <div className='root'>
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

            </div>
            <style jsx>{`.root{
                        position: absolute;
                        left: 400px;
                    }`}</style>
        </div>
    )
}


export default Layout;