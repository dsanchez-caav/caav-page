
import { Database } from "../Firebase/Firebase";

import { collection, getDocs } from "firebase/firestore";



export default async function getAllContacts() {
    const contactsA = [];

    const contactsRef = collection(Database, "contacts");
    const querySnapshot = await getDocs(contactsRef);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        contactsA.push(doc);
        
        ;
    });
    return contactsA;
}
