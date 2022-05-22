class User {
    constructor(username, password, displayName, image) {
        this.username = username;
        this.password = password;
        this.image = image;
        this.displayName = displayName;
    }
}
// const User1 = (username, password, image, displayName) => {
//     return {
//         username,
//         password,
//         image,
//         displayName
//     }
// }
export default User;