import Link from "next/link";

const Navbar = () => {

    const listLinkStyling = `ml-20 text-white opacity-50 
                            hover:opacity-100 `
    

    return (

        <div className="items-end">
            
                <ul className=" flex list-none mt-8 justify-end">
                    <li className={listLinkStyling}>Experience</li>
                    <li className={listLinkStyling}>Projects</li>
                    <li className={`${listLinkStyling} mr-14`}>Contacts</li>
                </ul>
                
        </div>
    )
}

export default Navbar;