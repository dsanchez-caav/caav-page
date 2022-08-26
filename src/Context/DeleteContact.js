import { Database } from "../Firebase/Firebase";
import { doc, deleteDoc, collection,  } from "firebase/firestore";

export async function deleteContact(contactA) {

    const ContactsRef = collection(Database, "contacts");

    const delContact = doc(ContactsRef, contactA.id);

    await deleteDoc(delContact)
}