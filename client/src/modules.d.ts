declare module "*.module.css" {
  const classes: { [key: string]: string };
}

// declare module '*.module.scss' {
//   const classes: { [key: string]: string };
// }
declare module "*.module.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.module.sass" {
  const classes: { [key: string]: string };
}

declare module "*.module.less" {
  const classes: { [key: string]: string };
}

declare module "*.module.styl" {
  const classes: { [key: string]: string };
}
