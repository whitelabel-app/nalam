export default function getMembersTitle(users) {
    const usersLength = users?.length;
    if (usersLength === 1) {
        return '1 Member';
    }
    return `${usersLength > 0 ? `${usersLength} Members` : ''}`;
}
