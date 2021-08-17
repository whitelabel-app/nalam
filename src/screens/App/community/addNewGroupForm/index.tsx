import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'react-native-rainbow';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import {
    Container,
    CloseButton,
    TopContent,
    Gradient,
    Header,
    Title,
    BottomContent,
    CreateButton,
    CloseIcon,
} from './styled';
import validate from './validate';
import { getCurrentUserUid } from '../../../../redux/services/auth';

interface FormValues {
    name: string;
}

interface Props {
    onRequestClose?: () => void;
    onSubmit?: ({ name: string }) => void;
    isLoading?: boolean;
}

const AddNewGroupForm: React.FC<Props &
    InjectedFormProps<FormValues, Props>> = props => {
    const {
        handleSubmit,
        reset,
        onRequestClose = () => {},
        isLoading,
        onSubmit = () => {},
    } = props;

    const submit = values => {
        onSubmit({
            ...values,
            createdBy: getCurrentUserUid(),
        });
        reset();
        onRequestClose();
    };

    return (
        <Container>
            <TopContent
                resizeMethod="resize"
                source={require('./images/image.png')}
                imageStyle={{
                    borderBottomRightRadius: 24,
                    borderBottomLeftRadius: 24,
                }}>
                <Gradient>
                    <Header>
                        <Title numberOfLines={1}>New Group</Title>
                        <CloseButton
                            onPress={onRequestClose}
                            icon={<CloseIcon />}
                        />
                    </Header>
                </Gradient>
            </TopContent>
            <BottomContent
                contentContainerStyle={{
                    flexGrow: 1,
                }}>
                <Field
                    component={Input}
                    name="name"
                    label="group name"
                    placeholder="Choose a name for your group"
                />
                <CreateButton
                    label="CREATE"
                    variant="brand"
                    isLoading={isLoading}
                    onPress={handleSubmit(submit)}
                />
            </BottomContent>
        </Container>
    );
};

AddNewGroupForm.propTypes = {
    onRequestClose: PropTypes.func,
    onSubmit: PropTypes.func,
    isLoading: PropTypes.bool,
};

AddNewGroupForm.defaultProps = {
    onRequestClose: () => {},
    onSubmit: () => {},
    isLoading: false,
};

export default reduxForm<FormValues, Props>({
    form: 'add-new-group',
    validate,
})(AddNewGroupForm);
