import { Database } from "../Firebase/Firebase";
import { doc, updateDoc } from "firebase/firestore";

export default async function editCareer(id, infoCareer) {
    
    const CareersRef = doc(Database, "careers", id);

    await updateDoc(CareersRef, infoCareer);

}