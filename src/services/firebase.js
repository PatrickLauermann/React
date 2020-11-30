import firebase from '../firebase-config';

class FirebaseService {

    async userIsLogged() {
        const user = await firebase.auth().currentUser;
        return user;
    };

    async deleteDocument(docId) {
        await firebase.firestore().collection('students').doc(docId).delete();
    }

    async logout() {
        await firebase.auth().signOut();
    }

    async authUser(email, password) {
        await firebase.auth().signInWithEmailAndPassword(email, password);
    }

    async createNewUser(email, password) {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    async createNewStudent(name, lastName, g1, g2) {
        await firebase.firestore().collection('students').add({
            'name': name,
            'lastName': lastName,
            'g1': +g1,
            'g2': +g2,
        })
    }

    async readData() {
        let data = [];
        let customerObject = {};
        await firebase.firestore().collection('students').get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    customerObject = {
                        ...doc.data(),
                        id: doc.id,
                    }
                    data.push(customerObject);
                });
            })
            .catch((err) => {
                console.log('Error getting documents', err);
            });
        return data;
    }
};

export default new FirebaseService();