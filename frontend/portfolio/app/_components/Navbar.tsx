import Link from "next/link";

const Navbar = () => {

    const listLinkStyling = `ml-20 text-white opacity-50 
                            hover:opacity-100 ease-in-out relative group`
    
    const underLine = <div className="pt-0.5 absolute w-full h-0.5 bg-white/80 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"/>
    

    return (

        <div className="items-end">
            <ul className=" flex list-none mt-8 justify-end">
                <li className={listLinkStyling}>
                    Experience
                    {underLine}
                </li>
                <li className={listLinkStyling}>
                    Projects
                    {underLine}
                </li>
                <li className={`${listLinkStyling} mr-14`}>
                    Contacts
                    {underLine}
                </li>
            </ul> 
        </div>
    )
}

export default Navbar;