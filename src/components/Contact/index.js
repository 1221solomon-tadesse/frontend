import './index.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return(
        <div className='flex ml-20 mb-40 py-7 px-10 gap-10'>
            <div className='flex flex-col'>
                <h1 className="text-4xl font-bold mt-[100px]">Let's chat.</h1>
                <p className='text-xl mt-4 w-[80%]'>Feel free to reach out to work together on a project, discuss project ideas, or just a friendly hello.</p>
                <div className='flex mt-10 ml-[80px] gap-6'>
                    <FontAwesomeIcon className="h-16 w-16" icon={faEnvelopeOpen} color="#4d4d4e"/>
                    <p className='text-2xl w-28'>Mail me at <a href="#">gargetisha@gmail.com</a></p>
                </div>
            </div>
            <div className='flex flex-col mt-5 bg-violet-300 shadow-xl px-8 py-10 gap-2 rounded-lg mr-12'>
                <h1 className='text-2xl font-semibold mb-4 ml-4'>Send me a message!</h1>
                <form className='flex flex-col bg-violet-300 gap-2'>
                    <input type="text" placeholder='Full Name' required className='rounded px-2 hover:ring-2 focus:outline-none w-[350px] h-10'/>
                    <input type="email" placeholder='Email address' required className='rounded px-2 hover:ring-2 focus:outline-none w-[350px] h-10'/>
                    <input type="text" placeholder='Subject' required className='rounded px-2 hover:ring-2 focus:outline-none w-[350px] h-10'/>
                    <textarea placeholder='Message' className='rounded px-2 hover:ring-2 focus:outline-none w-[350px] h-[100px]'/>
                    <button className='bg-violet-500 rounded text-lg font-semibold hover:text-white hover:ring-2 mt-2 py-[6px]'>Send message</button>
                </form>

            </div>

        </div>
    )
}

export default Contact