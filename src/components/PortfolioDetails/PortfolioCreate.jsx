import { Card } from '@nextui-org/react'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { axiosInstance } from '../../utils/axios/axiosInstance'
import BlogTextEditor from '../Blog/BlogTextEditor'
import PortfolioCompanyDetails from './PortfolioCompanyDetails'
import PortfolioImages from './PortfolioImages'
import { useNavigate } from 'react-router-dom'

const PortfolioCreate = () => {
    const navigate = useNavigate()
    // state management
    //---text
    const [value, setValue] = useState('')
    //---images
    const fileTypes = ["JPG", "PNG", 'JPEG'];
    const [imgsSrc, setImgsSrc] = useState([]);
    const [imagesUrl, setImagesUrl] = useState([]);
    //---company details
    const [companyName, setCompanyName] = useState('');
    const [companyImage, setCompanyImage] = useState('');
    const [companyDetails, setCompanyDetails] = useState('');


    // posting the portfolio details to the database
    const handlePostPortfolioDetails = async () => {
        // check if all the feild have entered or not
        if (value === ''  || companyDetails === '' || companyName === '') {
            toast.error('Please compelete all the feild')
            return
        }
        // if (imagesUrl.length === 0) {
        //     toast.error('Please compelete all the feildddd')
        //     return
        // }
        // post the data
        const portfolio = {
            companyName,
            companyImage,
            companyDetails,
            contributionImages: imagesUrl,
            contributionDetails: value
        }
        try {
            const response = axiosInstance.post('portfolio/create', portfolio)
            // reseting the feilds
            resetFeild()
            toast.success("Portfolio Created")
            navigate('/portfolio')
        } catch (err) {
            toast.error(err)
        }
    }
    function resetFeild() {
        setCompanyDetails('')
        setCompanyImage('')
        setImgsSrc([])
        setValue('')
        setCompanyName('')
        setImagesUrl([])
    }
    return (

        <Card isHoverable>
            <Card.Body>
                <PortfolioCompanyDetails
                    companyDetails={companyDetails}
                    setCompanyDetails={setCompanyDetails}
                    setCompanyImage={setCompanyImage}
                    companyName={companyName}
                    setCompanyName={setCompanyName}
                />
                <PortfolioImages
                    fileTypes={fileTypes}
                    imgsSrc={imgsSrc}
                    setImgsSrc={setImgsSrc}
                    imagesUrl={imagesUrl}
                    setImagesUrl={setImagesUrl}
                />
                <div className='p-5 border-2 border-black border-solid rounded-2xl my-4'>
                    <p className='mx-4 font-extrabold'>Write how you helped the company</p>
                    <BlogTextEditor value={value} setValue={setValue} />
                </div>
                {/* portfolio creation button */}
                <button
                    className='btn btn-primary'
                    onClick={handlePostPortfolioDetails}
                >Create Portfolio</button>
            </Card.Body>
        </Card>

    )
}

export default PortfolioCreate