// For CSS
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// For SASS
declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}
