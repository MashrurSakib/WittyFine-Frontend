import React from 'react'
import Navigationbar from '../../components/Navigationbar/Navigationbar'
import DrawerNavigation from '../../shared/Drawer/DrawerNavigation'
import { useQuery } from 'react-query'
import { axiosInstance } from '../../utils/axios/axiosInstance'
import BlogManagementTable from '../../components/Blog/BlogManagementTable'

const BlogManagement = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: 'allBlogs',
        queryFn: () => axiosInstance('blog/getBlogs')
    })
    console.log(data);
    return (
        <div className='bg-white h-[100vh] text-black'>
            <Navigationbar />
            <DrawerNavigation>
                <BlogManagementTable blogInfo={data?.data} />
            </DrawerNavigation>
        </div>
    )
}

export default BlogManagement