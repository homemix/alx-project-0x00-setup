import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className="text-xl font-extralight">Landing Page</h1>
            <Card/>

            <h1 className="text-2xl font-bold mb-4">Custom Button Variants</h1>


            <div className="flex gap-3">
                <Button title="Small Rounded-sm" className="text-sm px-3 py-1 rounded-sm"/>
                <Button title="Small Rounded-md" className="text-sm px-3 py-1 rounded-md"/>
                <Button title="Small Rounded-lg" className="text-sm px-3 py-1 rounded-full"/>
            </div>


            <div className="flex gap-3">
                <Button title="Medium Rounded-sm" className="text-base px-4 py-2 rounded-sm"/>
                <Button title="Medium Rounded-md" className="text-base px-4 py-2 rounded-md"/>
                <Button title="Medium Rounded-lg" className="text-base px-4 py-2 rounded-full"/>
            </div>


            <div className="flex gap-3">
                <Button title="Large Rounded-sm" className="text-lg px-6 py-3 rounded-sm"/>
                <Button title="Large Rounded-md" className="text-lg px-6 py-3 rounded-md"/>
                <Button title="Large Rounded-full" className="text-lg px-6 py-3 rounded-full"/>
            </div>
        </div>
    )
}

export default Landing;