import { Layout } from 'antd'
import Sider from 'antd/es/layout/Sider'
import React from 'react'

const Siders = () => {
    return (
     
            <Layout className='h-[100vh]'>
                <Sider className='flex flex-col'>
                    <div className='text-white w-full text-[15px] py-3 font-bold bg-slate-600 mt-10'>
                        Thêm sinh viên
                    </div>
                    <div className='text-white w-full text-[15px] py-3 font-bold bg-slate-600 mt-10'>
                        Danh sách sinh viên
                    </div>
                </Sider>
            </Layout>
     
    )
}

export default Siders
