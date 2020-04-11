declare interface Props {
  env: 'sandbox|development|production';
  style?: any;
  className?: any;
  clientId: string;
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

declare module 'verix-api-component' {
  export = Verix;
}
