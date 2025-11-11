import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className="text-xl font-extralight">Landing Page</h1>
            <Card/>

            <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-gray-100">
                <h1 className="text-2xl font-bold mb-4">Custom Button Variants</h1>

                {/* Small Buttons */}
                <div className="flex gap-3">
                    <Button title="Small Rounded-sm" className="text-sm px-3 py-1 rounded-sm"/>
                </div>

                {/* Medium Buttons */}
                <div className="flex gap-3">
                    <Button title="Medium Rounded-sm" className="text-base px-4 py-2 rounded-sm"/>

                </div>

                {/* Large Buttons */}
                <div className="flex gap-3">
                    <Button title="Large Rounded-sm" className="text-lg px-6 py-3 rounded-sm"/>

                </div>
            </div>
        </div>
    )
}

export default Landing;