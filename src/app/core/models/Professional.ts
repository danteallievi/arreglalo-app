interface IAddress {
  street: string;
  city: string;
  zip: string;
}

export interface IProfessional {
  email: string;
  avatar?: string;
  password: string;
  name: string;
  surname: string;
  phone: string;
  DNI: string;
  dateOfBirth: string;
  address: IAddress;
  skills: string[];
  clients?: string[];
  professional?: boolean;
}
