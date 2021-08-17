export default function getUserInitials(user) {
    if (user && user.firstName && user.lastName) {
        return `${user.firstName[0]} ${user.lastName[0]}`;
    }
    if (user && user.fullName) {
        return user.fullName[0];
    }
    return '';
}
