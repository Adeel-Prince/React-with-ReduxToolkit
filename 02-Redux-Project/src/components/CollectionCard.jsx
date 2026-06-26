import React from 'react'
import { useDispatch } from 'react-redux';
import { removeCollection, removedToast } from '../redux/features/collectionSlice';

const CollectionCard = ({item}) => {

    const disptach = useDispatch()
    const removedFromCollection = () => {
        disptach(removeCollection(item.id))
        disptach(removedToast())
    }
  return (
    <div className='w-[18vw] relative h-80 bg-white rounded-xl overflow-hidden'>
        <a target='_blank' className='h-full' href={item.url}>
            {item.type == 'photo'?<img className='h-full w-full object-cover object-center' src={item.src} alt=''/>: ''}
            {item.type == 'video' ? <video className='h-full w-full object-cover object-center' autoPlay muted loop src={item.src}></video>:''}
             </a>

            <div id='bottom'className='flex justify-between items-center gap-3 w-full px-4 py-6 absolute bottom-0 text-white'>
                <h2 className='text-lg font-semibold capitalize h-14 overflow-hidden'>{item.title}</h2>
                <button
                onClick={() => {
                    removedFromCollection(item)
                  
                }}
                 className='bg-indigo-600 text-white rounded px-3 py-1 font-medium cursor-pointer active:scale-95'>Remove</button>
            </div>
    </div>
  )
}

export default CollectionCard
