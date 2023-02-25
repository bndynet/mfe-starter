export enum Env {
  Dev = 'development',
  Prod = 'production',
}

export interface Remote {
  name: string;
  path: string;
  entryMap: { [key in Env]: string };
}
