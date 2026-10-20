
import {ChevronRight} from 'lucide-react'

const RightCardContent = (props) => {
  return (
  <div className='absolute top-0 left-0 h-full w-full  p-10 flex flex-col justify-between'>
        <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
        <div>
            <p className="text-xl leading-normal text-white mb-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tempore quo similique modi dicta commodi?</p>
            <div className='flex justify-between'>
                <button className="bg-blue-400 text-white font-semibold px-6 py-2 rounded-full">{props.tag}</button>
                <button className="bg-blue-400 text-white font-semibold px-2 py-2 rounded-full"> 
                    < ChevronRight size={36} strokeWidth={1.25} />
                    </button>
            </div>
        </div>
    </div>
      
    
  )
}

export default RightCardContent
