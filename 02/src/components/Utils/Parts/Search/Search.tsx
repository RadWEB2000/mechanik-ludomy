"use client"
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import {motion} from "framer-motion";
import css from "utils/Parts/Search/Search.module.scss";


type tSearch = {
    label:string;
    name:string;
    placeholder:string;
}

export default function Search(props:tSearch){

    const [searchValue,updateSearchValue] = useState<string>("");

    console.log("search:",searchValue)

    return(
        <div className={css.wrapper}>
            <form action="" onSubmit={(e) => e.preventDefault()}
                   
            >
                <label htmlFor={props.name}>{props.label}</label>
                <motion.div
                    whileFocus={{
                        outline:"2px solid white",
                        transition:{
                            ease:"linear",
                            duration:200,
                        }
                    }}
                    whileHover={{
                        outline:"2px solid white",
                        transition:{
                            ease:"linear",
                            duration:200,
                        }
                    }}
                 
                >
                    <input 
                        autoComplete={props.label}
                        autoCorrect="off"
                        id={props.name} 
                        name={props.name} 
                        onChange={(e) => updateSearchValue(e.target.value)}
                        placeholder={props.placeholder} 
                        type="text" 
                    />
                    <i>
                        <FiSearch />
                    </i>
                </motion.div>
            </form>
        </div>
    )
}