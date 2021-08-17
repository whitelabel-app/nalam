interface Values {
    name?: string;
}

export default function validate(values: Values): Values {
    const { name } = values;
    const errors = { name: '' };
    if (!name) {
        errors.name = 'Looks like you forgot enter the group name';
    }
    return errors;
}
