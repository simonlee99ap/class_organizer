import React from 'react'
import { useSelector } from "react-redux";
import ClassItem from "./ClassItem";

const ClassPanel = () => {
    const selectClasses = useSelector(state => state.classes);

    return (
        <div>
            { selectClasses.map((cls) => <ClassItem classObj={cls} />) }
        </div>
    )
}

export default ClassPanel

