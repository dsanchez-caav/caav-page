import { Database } from "../Firebase/Firebase";
import { doc, deleteDoc, collection,  } from "firebase/firestore";

export async function deleteCareer(careerid) {

    const CareersRef = collection(Database, "careers");

    const delCareer = doc(CareersRef, careerid.id);

    await deleteDoc(delCareer)
}