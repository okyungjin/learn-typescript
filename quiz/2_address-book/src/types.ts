enum PhoneType {
    Home = 'home',
    Office = 'office',
    Studio = 'studio',
}

interface Contact {
    name: string;
    address: string;
    phones: PhoneNumberDictionary;
}

interface PhoneNumberDictionary {
    [phoneType: string]: {
        num: number;
    };
}



export {
    Contact,
    PhoneNumberDictionary,
}