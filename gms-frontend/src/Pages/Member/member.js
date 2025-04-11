import React, {useState, useEffect} from 'react';
import AddIcon from '@mui/icons-material/Add'; 
import CardMembershipIcon from '@mui/icons-material/CardMembership'; 
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Membercard from '../../Components/MemberCards/membercards';
import Modal from '../../Components/Modal/modal';
import AddmemberShip from '../../Components/Addmembership/addmemberShip';
import Addmembers from '../../Components/Addmembers/addmembers';

const Member = () => {  
        const [addMembership, setAddmemberShip] = useState(false);
        const [addMember, setAddmember] = useState(false)
        const [currentPage, setCurrentPage] = useState(1);
        const [startFrom, setSTartFrom] = useState(0);
        const [endTo, setEndTo] = useState(9);
        const [totalData, setTotalData] = useState(0);
        const [limit, setLimit] = useState(9);
        const [noOfPage, setNoOfPage] = useState(0);

        useEffect(() => {
            fetchData();    
        })

        const fetchData=async()=>{
            let totalData = 52;
            setTotalData(totalData);

            let extraPage = totalData%limit===0?0:1;
            let totalPage = parseInt(totalData/limit) + extraPage;
            setNoOfPage(totalPage);

            if(totalData===0){
                setSTartFrom(-1);
                setEndTo(0);
            } else if (totalData < 10){
                setSTartFrom(0);
                setEndTo(totalData);
            }
        }
        const handleMembership = () =>{
            setAddmemberShip(prev=>!prev)
        }

        const handleMember = () => {
            setAddmember(prev=>!prev)
        }

        const handlePrev = () => {  
            if (currentPage !== 1) {  
                let currPage = currentPage - 1;  
                setCurrentPage(currPage);  
                var from = (currPage - 1) * 9;  
                var to = currPage * 9;  
                setSTartFrom(from);  
                setEndTo(to);  
            }  
        }

        const handleNext = () => {  
            if (currentPage !== noOfPage) {  
                let currPage = currentPage + 1;  
                setCurrentPage(currPage);  
                var from = (currPage - 1) * 9;  
                var to = currPage * 9;  
                if (to > totalData) {  
                    to = totalData;  
                }  
                setSTartFrom(from);  
                setEndTo(to);  
            }  
        };  
    return (  
        <div className="ml-[25%] p-5 w-full h-screen flex flex-col">   
            {/* block for banner */}  
            <div className='border-2 bg-slate-900 flex justify-between w-full text-white rounded-lg p-3'>  
                <button className="bg-slate-900 border border-white text-white px-5 py-1.5 rounded-full hover:bg-green-600 flex items-center transition-colors" onClick={()=>handleMember()}>  
                    Thêm khách hàng  
                    <AddIcon className="ml-1" fontSize="small" />  
                </button>  
                <button className="bg-slate-900 border border-white text-white px-5 py-1.5 rounded-full hover:bg-red-600 flex items-center transition-colors" onClick={()=>handleMembership()}>  
                    Gói tập
                    <CardMembershipIcon className="ml-1" fontSize="small" />  
                </button>  
            </div>  

            {/* block for back to dashboard */}  
            <Link to="/dashboard" className="flex items-center mt-4 text-blue-600 hover:text-blue-800 transition-colors">  
                <KeyboardReturnIcon className="mr-1" />   
                Trở lại trang chủ
            </Link>  

            <div className="mt-4 flex gap-2 w-1/2">  
                <input   
                    type="text"   
                    className='border-2 w-full p-2 rounded-lg'   
                    placeholder='Tìm kiếm bằng tên hoặc số điện thoại...'  
                />  
                <div className='bg-white p-3 border-2 text-black rounded-lg cursor-pointer hover:bg-blue-600 hover:text-white'>  
                    <SearchIcon/>  
                </div>  
            </div>  

            {/* Adjusted Total Members section */}  
            <div className='mt-5 flex items-center justify-between text-slate-900'>  
                <div className='text-xl'>Tổng số lượng khách hàng</div>  
                <div className='flex items-center gap-4'>  
                    <div className='text-sm text-gray-600'>{startFrom + 1} - {endTo} trên {totalData} khách hàng</div>  
                    <div className='flex items-center gap-2'>  
                        <div className={`w-8 h-8 cursor-pointer border-2 flex items-center justify-center hover:text-white hover:bg-blue-600 ${currentPage === 1 ? 'bg-gray-200 text-gray-400' : null}`} onClick={()=>{handlePrev()}}>  
                            <ArrowLeftIcon/>  
                        </div>  
                        <div className={`w-8 h-8 cursor-pointer border-2 flex items-center justify-center hover:text-white hover:bg-blue-600 ${currentPage === noOfPage ? 'bg-gray-200 text-gray-400' : null}`} onClick={()=>{handleNext()}}>
                            <ArrowRightIcon/>  
                        </div>  
                    </div>  
                </div>  
            </div>  

            <div className='bg-slate-100 mt-5 p-5 rounded-lg flex-1 overflow-y-auto'>
                <div className='grid grid-cols-3 gap-2'>
                    {/* Div for member cards */}
                     <Membercard/>
                     <Membercard/>
                     <Membercard/>
                     <Membercard/>
                     <Membercard/>
                     <Membercard/>
                     <Membercard/>
                     <Membercard/>
                     <Membercard/>

                    
                </div>

                {addMembership && < Modal header="Gói tập" handleClose={handleMembership} content={<AddmemberShip/>}/>}
                {addMember && <Modal header={"Thêm khách hàng"} handleClose={handleMember} content={<Addmembers/>}/>}
            </div>
        </div>  
    );  
}  

export default Member;