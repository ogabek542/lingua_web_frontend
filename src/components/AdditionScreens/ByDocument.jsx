import React from 'react'
import IconContent from '../IconContent/IconContent'
import AllDocumentsScreensData from '../IndustryComponentData/AllDocumentsData'

const ByDocument = () => {
  return (
    <div className='flex flex-col  px-3 h-full  w-full' >
    {/* top contetn */}
    <span className='text-md text-gray-500 my-2'>
        Documents
    </span>
    {/* main content */}
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 grid-rows-6 gap-1 h-auto">
    {AllDocumentsScreensData.map((item, idx) => (
        <IconContent
        key={idx}
        iconbgColor={item.iconbgColor}
        iconColor={item.iconColor}
        Icon={item.IconName}
        contentText={item.contentText}
        linkAddress={item.linkAddress}
        />
    ))}
    </div>
    {/* divider */}
    <div className='w-full border-[1px] border-gray-200 my-2'></div>
    {/* bottom content */}
    <span className='text-md text-gray-500 my-2'>
        See all documents
    </span>
</div>
  )
}

export default ByDocument
