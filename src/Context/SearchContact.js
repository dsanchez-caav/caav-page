import { collection, query, where, getDocs, documentId, } from "firebase/firestore";
import { Database } from "../Firebase/Firebase";

export default async function Getcontact(id) {

    const contact = [];

    const ContactRef = collection(Database, "contacts");

    const q = query(ContactRef, where(documentId(), "==", (id)));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        contact.push(doc);
    });
    
    return contact;
    
}
