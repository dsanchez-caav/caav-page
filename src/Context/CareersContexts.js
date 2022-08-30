
import { Database } from "../Firebase/Firebase";

import { collection, getDocs } from "firebase/firestore";



export default async function getAllCareer() {
    const careersA = [];

    const CareersRef = collection(Database, "careers");
    const querySnapshot = await getDocs(CareersRef);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        
        careersA.push(doc);
        
        ;
    });
    return careersA;
}
