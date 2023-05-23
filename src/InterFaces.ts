import { ReactNode } from "react";

export interface Handle {
  color: string;
  inter: string;
  password: string;
  id: number;
  name: string | null
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipicode: string;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
