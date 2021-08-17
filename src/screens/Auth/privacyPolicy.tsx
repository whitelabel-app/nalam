import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';

const headerStyles = {
    fontSize: 20,
};

export default function TermsAndConditions() {
    return (
        <SafeAreaView>
            <ScrollView style={{ marginVertical: 32, paddingHorizontal: 32 }}>
                <Text>
                    <Text style={headerStyles}>
                        Privacy Policy{'\n'}
                        {'\n'}
                    </Text>
                    <Text>
                        Your privacy is important to us. It is Nalam App's
                        policy to respect your privacy regarding any information
                        we may collect from you through our app, Nalam.
                        Information you provide us Some information is required
                        to create an account on our Services, such as your name,
                        mobile telephone number and password. This is the only
                        information you need to provide to create an account
                        with us.
                        {'\n'}
                        {'\n'}
                    </Text>
                    <Text style={headerStyles}>
                        ADDITIONAL INFORMATION{'\n'}
                        {'\n'}
                    </Text>
                    <Text>
                        To help improve your experience or enable certain
                        features of the Services, you may choose to provide us
                        with additional information, like your email address,
                        date of birth, gender,height, weight, sleep, steps,
                        active time by connecting with your wearable device.
                        {'\n'}
                        {'\n'}
                    </Text>
                    <Text>
                        We only ask for personal information when we truly need
                        it to provide a service to you. We collect it by fair
                        and lawful means, with your knowledge and consent. We
                        also let you know why we're collecting it and how it
                        will be used. We only retain collected information for
                        as long as necessary to provide you with your requested
                        service. What data we store, we'll protect within
                        commercially acceptable means to prevent loss and theft,
                        as well as unauthorized access, disclosure, copying, use
                        or modification.{'\n'}We don't share any personally
                        identifying information publicly or with third-parties,
                        except when required to by law.{'\n'}Our app is not
                        linked to external sites that are not operated by us.
                        {'\n'}
                        You are free to refuse our request for your personal
                        information, with the understanding that we may be
                        unable to provide you with some of your desired
                        services.{'\n'}Your continued use of our app will be
                        regarded as acceptance of our practices around privacy
                        and personal information. If you have any questions
                        about how we handle user data and personal information,
                        feel free to contact us.
                        {'\n'}
                        {'\n'}
                    </Text>
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}
