//Dependencies
import React, { ChangeEvent, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import uploadIcon from '../public/upload.svg'

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {

  const [file, setFile] = useState<File>();

  const handleUploadClick = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      uploadFiles(e.target.files[0]);
    }
  };

  const uploadFiles = async (uploadedFile: File) => {
    // if (!uploadedFile) {
    //   // toast('Please select a file!', {
    //   //   position: 'top-left',
    //   //   autoClose: 3000,
    //   //   closeOnClick: true,
    //   //   pauseOnHover: true,
    //   //   type: 'error'
    //   // });
    //   return;
    // }
    // // setInProgress(true);
    // try {
    //   toast('File uploading!', {
    //     position: 'top-left',
    //     autoClose: 3000,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     type: 'info'
    //   });
    //   const formData = new FormData();
    //   formData.append('files', uploadedFile);
    //   const { data } = await axios.post('/api/upload', formData);
    //   console.log(data);
    // } catch (error) {
    //   toast('File uploading failed!', {
    //     position: 'top-left',
    //     autoClose: 3000,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     type: 'error'
    //   });
    // }
    // setInProgress(false);
  };

  return (
    <div className="mx-auto flex flex-col space-y-4">
      <header className="header bg-[#06212cf7]">
        <div className="langchain-app-header h-[80px] justify-center flex flex-col">
          <div className="flex items-center w-full px-[3rem] justify-between">
            <Link href={'/'}>
              <div className="site-name text-[20px] font-bold text-white cursor-pointer">
                 Langchain App
              </div>
            </Link>
            <div className="enter-details-back-to-homepage flex gap-[15px]">
              <label className="text-[12px] font-bold flex items-center justify-center gap-[10px]">
                <input
                  type="file"
                  hidden
                  accept=".txt"
                />
                <Image src={uploadIcon} alt="image-not-found" />
                <span className='text-white'>Upload Document</span>
              </label>
            </div>
          </div>
        </div>
      </header>
      <div>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
