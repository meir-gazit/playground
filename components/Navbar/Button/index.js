import Image from 'next/image'
import tmp from '../assets/images'

export default function Button({label='label', src={tmp}}){
    return(
        <button className="hover:text-blue-800 text-gray-800 font-bold py-2 px-4">
            <div className="flex items-center justify-center">
                <Image width={30} height={30} alt={label} src={src} />
            </div>
            <span className="place-self-center">{label}</span>
        </button>        
    )
}