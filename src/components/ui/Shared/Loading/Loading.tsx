

import { HashLoader } from "react-spinners";

export default function Loading() {
    return (
        <div className="flex justify-center items-center h-screen"><HashLoader
            color="#09e8cd"
            size={50}
        /></div>
    )
}
