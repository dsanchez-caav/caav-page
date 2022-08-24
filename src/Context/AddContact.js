import { Database } from "../Firebase/Firebase";
import { collection, doc, setDoc } from "firebase/firestore";

export default async function addcontact(infoContact) {

    const contactsRef = collection(Database, "contacts");

    const newcontact= doc(contactsRef);

    await setDoc(newcontact, infoContact)

}