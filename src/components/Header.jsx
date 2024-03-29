import { useState } from 'react';
import logo from './../assets/images/logo.png'
import {
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';
export default function Header() {
    const [toggle, setToggle] = useState(false);
    const menu = [
        {
            name: 'HOME',
            icon: HiHome
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass
        },
        {
            name: 'WATCH LIST',
            icon: HiPlus
        },
        {
            name: 'ORIGINALS',
            icon: HiStar
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle
        },
        {
            name: 'SERIES',
            icon: HiTv
        }
    ]
    return (
        <div className='flex items-center justify-between p-5'>
            <div className='flex' >
                <img src={logo} className='w-[6rem] md:w-[8rem] mr-4 object-cover' />
                <div className='hidden md:flex gap-12'>
                    {menu.map((item) => (
                        <HeaderItem name={item.name} Icon={item.icon} />
                    ))}
                </div>
                <div className='flex md:hidden gap-4'>
                    {menu.map((item, index) => index < 3 && (
                        <HeaderItem name={''} Icon={item.icon} />
                    ))}

                    <div className='flex md:hidden' onClick={() => setToggle(!toggle)}>
                        <HeaderItem name={''} Icon={HiDotsVertical} />
                        {toggle && <div className='mt-10 border-[1px] border-gray-700 py-5 px-3'>
                            {menu.map((item, index) => index > 2 && (
                                <HeaderItem name={item.name} Icon={item.icon} />
                            ))}
                        </div>}
                    </div>
                </div>
            </div>
            <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' className=' w-[2rem] md:w-[3rem] object-cover' />
        </div >
    );
}