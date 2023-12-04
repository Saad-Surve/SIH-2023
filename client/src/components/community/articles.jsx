import React from 'react'
import ArticleCard from './articleCard'
const articles = () => {
  return (
    <div className='flex flex-col gap-1'>
    <div className='flex p-4'>
        Articles
    </div>
    <div className='h-[calc(100vh-18rem-1px)] overflow-y-scroll p-4 random'>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
    </div>
    </div>
  )
}

export default articles