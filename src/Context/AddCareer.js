import { Database } from "../Firebase/Firebase";
import { collection, doc, setDoc } from "firebase/firestore";

export default async function addCareer(infoCareer) {

    const CareersRef = collection(Database, "careers");

    const newCareer = doc(CareersRef);
    
    
    await setDoc(newCareer, infoCareer)


    console.log(infoCareer)

}