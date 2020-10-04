import firebase from "firebase";
const db = firebase.firestore();
const projectData = [];
db.collection('projects')
.get()
.then(querySnapshot => {
  querySnapshot.forEach(doc => {
    projectData.push({
      id: doc.id,
      academicYear: doc.data().academicYear,
      projectNameTh: doc.data().projectNameTh,
      projectNameEn: doc.data().projectNameEn,
      projectMember: doc.data().projectMember,
      projectPoint: doc.data().projectPoint,
      projectPointSP1: doc.data().projectPointSP1,
      projectPointSP2: doc.data().projectPointSP2,
      projectType: doc.data().projectType,
      projectDuration: doc.data().projectDuration,
      projectBg: doc.data().projectBg,
      projectStatus: doc.data().projectStatus,
      download: doc.data().download
    });
  });
  return projectData;
})
.catch(error => {
  console.log("Error getting documents: ", error);
});

export default projectData


