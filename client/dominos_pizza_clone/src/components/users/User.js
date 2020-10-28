import { auth, db } from "../firebase/Config"
// signup function----------------------

export const SignupUser = ({email, password, userInfo}) => {
            if(!email && !password ){

                auth.signInAnonymously().then(user => {
                    db.collection("Guest-Users").doc(user.user.uid).set(userInfo)
                }).then(res => {
                    return res
                }).catch(err => {
                    console.log({ message : err })
                })

            }
            if (email && password) {

                auth.createUserWithEmailAndPassword(email, password).then(user => {

                    db.collection('Registerd-Users').doc(user.user.uid).set(userInfo)
                }).then(res => {
                    return res
                }).catch(err => {
                    console.log({ message : err })
                })

            }else { return }

}

// sign in function--------------------
export const SigninUser = ({ email, password }) => {
    auth.signInWithEmailAndPassword( email, password ).then(res => {
        return res
    }).catch(err => {
        console.log({message : err})
    })
}
// signout function-------------------
export const SignoutUser = () => {
    auth.signOut()
}

