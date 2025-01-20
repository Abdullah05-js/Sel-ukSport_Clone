import { Suspense } from "react";
import BanUser from "./BanUser";
import CreateLiveModel from "./CreateLiveModel";


const BanForm = () => {
    return (
        <div className="flex flex-row gap-6">

            <BanUser />
            <CreateLiveModel />
        </div>
    )
}


export default BanForm;