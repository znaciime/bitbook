class User {
    constructor(id, img, name, surname, about, company, position, comments, posts, created) {
        this.id = id;
        this.img = img;
        this.name = name;
        this.surname = surname;
        this.about = about;
        this.company = company;
        this.position = position;
        this.comments = comments;
        this.posts = posts;
        this.created = `${new Date(created).getDate()}.${new Date(created).getMonth() + 1}.${new Date(created).getFullYear()}`;
    }
}
export default User