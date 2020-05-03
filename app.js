
class User {

    constructor(nickname, id) {
        this.nickname = nickname;
        this.id = this.createUniqueId();
    }
    createUniqueId() {
        return Math.random().toString(36).substr(2, 9);
    }

    changeNickname(newNick) {
        this.nickname = newNick;
    }

    show() {
        console.log(this.nickname, this.id)
    }
}

const user = new User("Kamil")
user.show();
user.changeNickname("Józek")
user.show();

const userek = new User("Jan")
userek.show();