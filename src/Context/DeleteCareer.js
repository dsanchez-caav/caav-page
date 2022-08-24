import { Database } from "../Firebase/Firebase";
import { doc, deleteDoc, collection,  } from "firebase/firestore";

export async function deleteCareer(careerA) {

    const CareersRef = collection(Database, "careers");

    const delCareer = doc(CareersRef, careerA.id);

    await deleteDoc(delCareer)
}