export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(newMember) {
        if (this.members.has(newMember)) {
            throw new Error("Персонаж уже есть в команде!")
        } else {
            this.members.add(newMember)
        }
    }

    addAll (...newMembers) {
       newMembers.forEach(newMember => this.add(newMember))
    }

    toArray() {
        return Array.from(this.members);
    }

}