import Image from "next/image";
import { SearchIcon, HomeIcon } from '@heroicons/react/solid'
import { FlagIcon,PlayIcon,ShoppingCartIcon,UserGroupIcon, ViewGridIcon, ChatIcon, BellIcon, ChevronDownIcon } from '@heroicons/react/outline'
import HeaderIcon from "./HeaderIcon";

function Header() {
    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md" >
            {/* left */}
            <div className="flex items-center">
                <Image
                src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-facebook-icon-png-images-icons-and-png-backgrounds-1.png"
                width={40}
                height={40}
                layout="fixed"/>
            </div>
            <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                <SearchIcon className="h-6 text-gray-600"/>
                <input className="hidden md:inline-flex items-center ml-2 bg-transparent outline-none placeholder-gray-500 flex-shrink" type="text" placeholder="Search Facebook"/>
            </div>
            {/* center */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon active Icon={HomeIcon}/>
                    <HeaderIcon Icon={FlagIcon}/>
                    <HeaderIcon Icon={PlayIcon}/>
                    <HeaderIcon Icon={ShoppingCartIcon}/>
                    <HeaderIcon Icon={UserGroupIcon}/>
                </div>

            </div>
            {/* right */}
            <div className="flex items-center sm:space-x-2 justify-end">
                {/* profile picture */}
                <p className="whitespace-nowrap font-semibold pr-3">Anna Jose</p>
                <ViewGridIcon className="icon"/>
                <ChatIcon className="icon"/>
                <BellIcon className="icon"/>
                <ChevronDownIcon className="icon"/>
            </div>
        </div>
    )
}

export default Header
