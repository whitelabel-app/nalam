import React from 'react';
import { FlatList } from 'react-native';
import { Avatar } from 'react-native-rainbow';
import { ContactItem, InviteButton, TextInfo } from './styled/index';
import getContactFullName from './getContactFullName';
import { getNormalizedNumber } from '../../../helpers';

function contactIsMemberOfGroup(contact, users) {
    return users.some(user => {
        return contact.phoneNumbers.some(contactNumber => {
            return (
                user?.data?.phoneNumber ===
                getNormalizedNumber(contactNumber.number)
            );
        });
    });
}

function ContactAction({ isMember, onPress }) {
    if (isMember) {
        return <TextInfo>Member</TextInfo>;
    }
    return (
        <InviteButton
            variant="outline-brand"
            label="Invite"
            onPress={onPress}
        />
    );
}

function Item(props) {
    const { contact, onSelectContact, users } = props;
    const { thumbnailPath, givenName, familyName, phoneNumbers } = contact;
    const name = getContactFullName(contact);
    const initials = `${givenName ? givenName[0] : ''}${
        familyName ? familyName[0] : ''
    }`;
    const isMember = contactIsMemberOfGroup(contact, users);
    const numbers = phoneNumbers.reduce((acc, value) => {
        if (acc) {
            return `${acc}, ${value.number}`;
        }
        return value.number;
    }, '');

    return (
        <ContactItem
            icon={
                <Avatar src={thumbnailPath} initials={initials} size="large" />
            }
            label={name}
            description={numbers}
            action={
                <ContactAction
                    isMember={isMember}
                    onPress={() => onSelectContact(contact)}
                />
            }
        />
    );
}

interface Item {
    recordID: string;
}

const flatListStyles = {
    paddingBottom: 20,
};

export default function ContactsList({ data, onSelectContact, users }) {
    return (
        <FlatList
            contentContainerStyle={flatListStyles}
            data={data}
            renderItem={({ item }) => (
                <Item
                    contact={item}
                    users={users}
                    onSelectContact={onSelectContact}
                />
            )}
            keyExtractor={(item: Item) => item.recordID}
        />
    );
}
