import { IPokemon } from "../../components/card";
export interface DetailsParam {
  data: IPokemon | undefined;
}
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      details: DetailsParam;
    }
  }
}
