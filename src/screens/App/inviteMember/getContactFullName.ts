export default function getContactFullName(contact) {
    const { givenName, middleName, familyName } = contact;
    return `${givenName}${middleName ? ` ${middleName}` : ' '}${
        familyName ? ` ${familyName}` : ' '
    }`;
}
