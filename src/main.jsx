import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {QueryClient,QueryClientProvider,} from 'react-query'
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async'
import { ThreeDots } from 'react-loader-spinner'


// creating a query client
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div className='flex justify-center items-center w-[100vw] h-[100vh]'>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        className="mx-auto"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
    }>
    <QueryClientProvider client={queryClient} >
      <HelmetProvider>
        <App />
      <Toaster />
      </HelmetProvider>
      </QueryClientProvider>
    </Suspense>
  </React.StrictMode>,
)
