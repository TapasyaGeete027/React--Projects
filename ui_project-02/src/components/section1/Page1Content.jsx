
import LeftText from './LeftText'
import RightText from './RightText'

const Page1Content = (props) => {
  return (
    <div className='pb-16 pt-6 px-18 h-[90vh]  items-center flex gap-10 '>
        <LeftText />
        <RightText users={props.users} />
      
    </div>
  )
}

export default Page1Content
