import React from 'react'
import { toast } from 'react-hot-toast'
import { MdDeleteForever } from 'react-icons/md'
import { useQueryClient } from 'react-query'
import { axiosInstance } from '../../utils/axios/axiosInstance'
const BlogManagementTable = ({ blogInfo }) => {
    // Get QueryClient from the context
    const queryClient = useQueryClient()

    const handleDeleteBlog = async (id) => {
        try {
            const res = await axiosInstance.delete(`blog/deleteBlog?id=${id}`)
            queryClient.invalidateQueries('allBlogs')
            toast.success('Blog deleted successfully')
        } catch (err) {
            toast.error('Error deleting blog')
        }
    }
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-[calc(100vw-350px)] text-black">
                    {/* head */}
                    <thead>
                        <tr>
                            <th bg-primary>Blog Title</th>
                            <th bg-primary>Blog View</th>
                            <th bg-primary>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {blogInfo?.map(blog =>
                            <tr>
                                <td>
                                    <p>{blog?.title}</p>
                                </td>
                                <td>
                                    <p>{blog?.views}</p>
                                </td>
                                <th>
                                    <button
                                        onClick={() => handleDeleteBlog(blog?._id)}
                                        className="btn btn-ghost btn-xs">
                                        <MdDeleteForever className='text-red-400 inline-block text-xl ' />
                                    </button>
                                </th>
                            </tr>)}

                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>Views</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    )
}

export default BlogManagementTable