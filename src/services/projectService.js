import firebase from "firebase/app";
import "firebase/firestore";
import axios from "axios";

const db = firebase.firestore();

export const downloadFile = async (state) => {
    //Create a root reference
    var storageRef = firebase.storage().ref();

    await storageRef
        .child(state)
        .getDownloadURL()
        .then(function (url) {
            // `url` is the download URL for 'images/stars.jpg'

            window.open(url, "_blank");
            return { status: true, data: url };
        })
        .catch((error) => {
            return { status: false, data: "Error getting files url: " + error };
        });
}

export const downloadProgress = async (state) => {
    var storageRef = firebase.storage().ref();

    await storageRef
        .child(state.data.fileName)
        .getDownloadURL()
        .then(function (url) {
            // `url` is the download URL for 'images/stars.jpg'

            window.open(url, "_blank");
            return { status: true, data: url };
        })
        .catch((error) => {
            return { status: false, data: "Error getting files url: " + error };
        });
}

export const updateProgress1 = async (state) => {
    await db.collection("projectProgress")
        .doc(state.id)
        .update({
            advisorComment: state.AdvisorComment,
            advisorPoint: state.AdvisorPoint,
            createdAt: new Date(),
        })
        .then(() => window.alert("Update progress successed!"))
        .catch((error) => {
            return { status: false, data: "Error getting documents: " + error };
        });
}

export const updateProgress2 = async (state) => {
    await db.collection("projectProgress")
        .doc(state.id)
        .update({
            advisorComment: state.AdvisorComment,
            advisorPoint: state.AdvisorPoint,
            createdAt: new Date(),
        })
        .then(() => window.alert("Update progress successed!"))
        .catch((error) => {
            return { status: false, data: "Error getting documents: " + error };
        });
}

export const updateFinalPresent = async (state) => {
    await db.collection("projectProgress")
        .doc(state.id)
        .update({
            advisorComment: state.AdvisorComment,
            advisorPoint: state.AdvisorPoint,
            committee1Comment: state.Committee1Comment,
            committee1Point: state.Committee1Point,
            committee2Comment: state.Committee2Comment,
            committee2Point: state.Committee2Point,
            createdAt: new Date(),
        })
        .then(() => window.alert("Update progress successed!"))
        .catch((error) => {
            return { status: false, data: "Error getting documents: " + error };
        });
}

export const updateFinalDocument = async (status) => {
    db.collection("projectProgress")
        .doc(status.id)
        .update({
            advisorComment: status.AdvisorComment,
            advisorPoint: status.AdvisorPoint,
            committee1Comment: status.Committee1Comment,
            committee1Point: status.Committee1Point,
            committee2Comment: status.Committee2Comment,
            committee2Point: status.Committee2Point,
            createdAt: new Date(),
        })
        .then(() => window.alert("Update progress successed!"))
        .catch((error) => {
            return { status: false, data:"Error getting documents: "+ error };
        });
}

export const updateProject = async (state) => {
    await db.collection("projectProgress")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (
                    doc.data().projectId == state.projectId &&
                    doc.data().seniorType.includes("senior1")
                ) {
                    projectPoint +=
                        parseInt(doc.data().advisorPoint) +
                        parseInt(doc.data().committee1Point) +
                        parseInt(doc.data().committee2Point);
                    return {status: true, data: projectPoint}
                }
                if (
                    doc.data().projectId == state.projectId &&
                    doc.data().seniorType.includes("senior2")
                ) {
                    projectPoint +=
                        parseInt(doc.data().advisorPoint) +
                        parseInt(doc.data().committee1Point) +
                        parseInt(doc.data().committee2Point);
                    return {status: true, data: projectPoint}
                }
            });
            db.collection("projects").doc(state.projectId).update({
                projectPointSP1: state.projectPointSP1,
                projectPointSP2: state.projectPointSP2,
                createdAt: new Date(),
            });
        })
        .catch((error) => {
            return { status: false, data:"Error getting documents: "+ error };
        });
}