import axios from 'axios';
import React, { useState } from 'react'
import { FileUploader } from 'react-drag-drop-files';

const PortfolioImages = ({ fileTypes, imagesUrl, imgsSrc, setImgsSrc, setImagesUrl }) => {

    const handleDetailsImageChange = async (files) => {

        // multiple image upload
        for (const file of files) {
            // console.log(file);

            const formData = new FormData();
            formData.append("image", file);

            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setImgsSrc((imgs) => [...imgs, reader.result]);
            };

            reader.onerror = () => {
                // console.log(reader.error);
            };


            axios
                .post(`${import.meta.env.VITE_APP_IMAGEBB_URL}`, formData)
                .then((res) => {
                    // setLoading((l) => --l);
                    setImagesUrl((img) => [
                        ...img,
                        res?.data?.data?.display_url,
                    ]);
                });
        }
    };
    return (
        <div className='p-5 border-2 border-black border-solid rounded-2xl my-4'>
            <p className='my-3 font-extrabold'>Please set images what you have done for the company</p>
            <FileUploader
                handleChange={handleDetailsImageChange}
                name="file"
                types={fileTypes}
                multiple={true}
            />
            <p>Uploaded images</p>
            {imagesUrl?.map(image => <div className='flex flex-wrap'>
                <img src={image} alt="" className='w-[250px]' />
            </div>
            )}
        </div>

    )
}

export default PortfolioImages