import { collection, query, where, getDocs, documentId, } from "firebase/firestore";
import { Database } from "../Firebase/Firebase";

export default async function Getcareer(id) {

    const careers = [];

    const CareersRef = collection(Database, "careers");

    const q = query(CareersRef, where(documentId(), "==", (id)));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        
        console.log(doc.id, " => ", doc.data());
        careers.push(doc);
        console.log(careers)
        
    });
    
    return careers;
    
}
