import { ReactNode } from "react";

export interface Handle {
  map(arg0: (item: any, index: number) => import("react/jsx-runtime").JSX.Element): ReactNode;
  color: string;
  inter: string;
  password: string;
  id: number;
  name: string 
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
