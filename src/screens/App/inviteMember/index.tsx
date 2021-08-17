import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NativeModal from 'react-native-modal';
import {
    Header,
    Title,
    HeaderIcon,
    Container,
    MagnifyingIcon,
    InputSearch,
    TopContainer,
    HeaderButton,
} from './styled/index';
import SelectPhone from './selectPhone';
import {
    loadPhoneContacts,
    inviteUserToGroup,
} from '../../../redux/actions/invitations';
import { filterCollection } from '../../../helpers';
import ContactsList from './contactsList';
import getContactFullName from './getContactFullName';
import { startLoadingApp } from '../../../redux/actions/app';

export default function InviteMemberScreen({ navigation }) {
    const {
        goBack,
        state: {
            params: { group, users },
        },
    } = navigation;
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.invitations.contacts);
    const members = useSelector(state => state.groups[group.id].members);
    const profile = useSelector(state => state.app.profile);
    const [contactsToShow, setContactsToShow] = useState(contacts);
    const [query, setQuery] = useState('');
    const [isOpenMorePhone, setIsOpenMorePhone] = useState(false);
    const [selectedPhone, setSelectedPhone] = useState<any>();
    const [selectedContact, setSelectedContact] = useState();

    useEffect(() => {
        if (contacts.length === 0) {
            dispatch(
                startLoadingApp({
                    transparent: true,
                    title: 'We are looking for your contacts',
                }),
            );
        }
        const subscription = navigation.addListener('didFocus', () => {
            dispatch(loadPhoneContacts());
        });
        return () => subscription.remove();
    }, [contacts, dispatch, navigation]);

    useEffect(() => {
        setContactsToShow(contacts);
    }, [contacts]);

    const filterContacts = (value: string) => {
        setQuery(value);
        setContactsToShow(
            filterCollection({
                query: value,
                collection: contacts,
                mapValuesToStringFn: contact => getContactFullName(contact),
            }),
        );
    };

    const selectContact = contact => {
        const { phoneNumbers } = contact;
        if (phoneNumbers.length === 1) {
            dispatch(
                inviteUserToGroup({
                    group,
                    number: phoneNumbers[0].number,
                    members,
                    ownerProfile: profile,
                }),
            );
        } else {
            setSelectedContact(contact);
            setIsOpenMorePhone(true);
        }
    };

    const handleDismissModal = () => {
        if (selectedPhone) {
            dispatch(
                inviteUserToGroup({
                    group,
                    number: selectedPhone,
                    members,
                    ownerProfile: profile,
                }),
            );
        }
        setSelectedPhone('');
    };

    const selectPhone = number => {
        setSelectedPhone(number);
        setIsOpenMorePhone(false);
    };

    return (
        <Container>
            <Header>
                <TopContainer>
                    <HeaderButton
                        icon={<HeaderIcon />}
                        onPress={() => goBack()}
                    />
                    <Title numberOfLines={1}>Your Contacts</Title>
                </TopContainer>
                <InputSearch
                    placeholder="Search"
                    icon={<MagnifyingIcon />}
                    onChange={filterContacts}
                    value={query}
                />
            </Header>
            <ContactsList
                data={contactsToShow}
                onSelectContact={selectContact}
                users={users}
            />
            <NativeModal
                isVisible={isOpenMorePhone}
                // TODO: remove inline styles
                style={{
                    justifyContent: 'flex-end',
                    margin: 0,
                }}
                onBackdropPress={() => setIsOpenMorePhone(false)}
                onSwipeComplete={() => setIsOpenMorePhone(false)}
                onDismiss={handleDismissModal}
                swipeDirection="down">
                <SelectPhone
                    contact={selectedContact}
                    onSelectPhone={selectPhone}
                />
            </NativeModal>
        </Container>
    );
}

InviteMemberScreen.navigationOptions = {
    header: null,
};
