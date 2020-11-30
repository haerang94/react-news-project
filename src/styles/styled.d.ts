import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    size: {
      sm: string;
      smd: string;
      mmd: string;
      md: string;
      lg: string;
    };

    color: {
      blue: string;
      middleBlue: string;
      carrot: string;
      lightGray:string;
    };
  }
}
