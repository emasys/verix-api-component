interface IData {
  name?: {
    first: string;
    last: string;
  };
  birthdate?: {
    month: 11;
    day: 3;
    year: 1964;
  };
  mobileNumber?: string; 
  socialSecurityNumber?: string;
  filingAddress?: {
    address: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
  };
  filingStatus?: string; 
  email: string;
}

declare interface Props {
  env: "sandbox|development|production";
  style?: any;
  className?: any;
  clientId: string;
  data: IData;
  onSuccess: (res: any) => void;
  onExit: (res: any) => void;
  children: any;
}
declare class Verix {
  props: Props;
  state: any;
  context: any;
  refs: any;
  forceUpdate(callback: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}

declare module "verix-api-component" {
  export = Verix;
}
