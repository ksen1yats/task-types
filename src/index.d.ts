interface Person {
    name: string;
    age: number;
    gender: 'male' | 'female';
}

interface Employee extends Person {
    company: string;
}

export declare function getPersons(): Person[];

export declare function personToString(person: Person | Employee): string;
