import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useLocation } from 'react-router-dom';
const Sidebar = () => {

    const location = useLocation();
  return (
    <div className='w-1/4 min-h-screen h-full fixed left-0 top-0 border-2 bg-black text-white p-5 font-extralight flex flex-col'>
        <div className='text-center text-4xl font-semibold'>
            HMH GYM
        </div>
        <div className='flex gap-5 my-5'>
            <div className='w-[100px] h-[100px] rounded-lg'>
                <img alt = 'gym pic' className='w-full h-full rounded-full' src = 'https://rukminim2.flixcart.com/image/850/1000/k76ihe80/sticker/f/d/c/gym-boy-medium-50-45-wz-292-wallzone-original-imafpggzrb4bszdn.jpeg?q=90&crop=false'/>
            </div>
            <div>
                <div className='text-3xl'>Xin chào!</div>
                <div className='text-xl mt-1 font-semibold'>Quản lí</div>
                <div className='mt-2'>
                    <button className='flex items-center gap-1 bg-gray-600 hover:bg-red-700 text-white px-2 py-1 rounded-md transition-colors'>
                        <LogoutIcon fontSize="small" />
                        <span>Đăng xuất</span>
                    </button>
                </div>
            </div>
        </div>

        <div className='mt-10 py-5 border-t-2 border-gray-700 flex-grow'>
            <Link to='/dashboard' className={`flex gap-8 mt-5 text white font-semibold text-xl bg-slate-700 p-3 rounded-xl cursor-pointer hover:bg-white hover:text-black ${location.pathname==="/dashboard"?'border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500':null}`}>               
                <div><HomeIcon/></div>
                <div>Trang chủ</div>
            </Link>

            <Link to='/member' className={`flex gap-8 mt-5 text white font-semibold text-xl bg-slate-700 p-3 rounded-xl cursor-pointer hover:bg-white hover:text-black ${location.pathname==="/member"?'border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500':null}`}>
                <div><PeopleAltIcon/> </div>
                <div>Khách hàng</div>
            </Link>

            <div className='flex gap-8 mt-5 text white font-semibold text-xl bg-slate-700 p-3 rounded-xl cursor-pointer hover:bg-white hover:text-black'>
                <div><PersonIcon/> </div>
                <div>Huấn luyện viên</div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar