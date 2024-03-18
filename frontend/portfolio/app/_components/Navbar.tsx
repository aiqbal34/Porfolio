import Link from "next/link";

const Navbar = ({experienceRef} : {
    experienceRef: React.RefObject<HTMLDivElement>
}) => {

    const listLinkStyling = `ml-20 text-white opacity-50 
                            hover:opacity-100 ease-in-out relative group duration-500 fixed`
    
    const underLine = <div className="pt-0.5 absolute w-full h-0.5 bg-white/80 scale-x-0 group-hover:scale-x-100 transition-transform origin-left "/>
    
    const experienceOnClickHandler = () => {
        console.log("e")
        experienceRef.current?.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (

        <div className="items-end">
            <ul className=" flex list-none mt-8 justify-end">
                <li className={listLinkStyling} onClick={experienceOnClickHandler}>
                    Experience
                    {underLine}
                </li>
                <li className={listLinkStyling}>
                    Projects
                    {underLine}
                </li>
                <li className={`${listLinkStyling} mr-14`}>
                    Contact Me
                    {underLine}
                </li>
            </ul> 
        </div>
    )
}

export default Navbar;