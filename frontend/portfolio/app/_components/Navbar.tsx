import Link from "next/link";

const Navbar = () => {

    const listLinkStyling = "pl-2 text-white font-semibold"

    return (

        <div className="items-end">
            
                <ul className=" flex list-none pt-3 justify-end">
                    <li className={listLinkStyling}>Experience</li>
                    <li className={listLinkStyling}>Projects</li>
                    <li className={listLinkStyling}>Contacts</li>
                </ul>
                
        </div>
    )
}

export default Navbar;