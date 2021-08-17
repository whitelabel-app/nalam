export const LOAD_GROUP_MEMBERS = 'LOAD_GROUP_MEMBERS';

export function loadGroupMembers(members, groupId) {
    return {
        type: LOAD_GROUP_MEMBERS,
        groupId,
        members,
    };
}
