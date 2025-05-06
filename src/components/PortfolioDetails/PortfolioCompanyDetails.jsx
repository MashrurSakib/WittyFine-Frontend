import axios from 'axios';
import React from 'react'
import { toast } from 'react-hot-toast';

const PortfolioCompanyDetails = ({ setCompanyDetails,setCompanyImage, companyDetails, setCompanyName, companyName }) => {
    // post image to imagebb
    function postToImagebb(e) {
        // post image to image bb
        // console.log('i am image poster');
        const formData = new FormData();
        formData.append("image", e.target.files[0]);

        axios.post(`${import.meta.env.VITE_APP_IMAGEBB_URL}`, formData).then(function (response) {
            console.log(response?.data?.data?.display_url);
            setCompanyImage(response?.data?.data?.display_url);
        }).catch(err => toast.error(err));

        // if (error) return 'An error has occurred: ' + error.message
    }

    return (
        <div className='flex flex-col w-full p-5 border-2 border-black border-solid rounded-2xl my-4'>

            <span className='font-extrabold'>Please enter the company name</span>
            <input type="text"
                className='p-3 bg-white border-2 border-black border-solid rounded-xl'
                value={companyName}
                onChange={e => setCompanyName(e.target.value)}
                name="name" id=""
            />
            <span className='font-extrabold'>Please enter an image for the company</span>
            <input
                type="file" className="file-input file-input-bordered file-input-success w-full inline-block bg-white"
                onChange={(e) => postToImagebb(e)}
            />
            <span className='font-extrabold'>Please write something about the company</span>
            <textarea
                value={companyDetails}
                onChange={e => setCompanyDetails(e.target.value)}
                className="bg-white rounded-xl w-full border-2 border-black border-solid"
                placeholder="Write something about the company....."></textarea>

        </div>
    )
}

export default PortfolioCompanyDetails