/* Declaration file for images*/

// For .png, .jpg, .jpeg files, we simply declare them as 'any' because they
// are generally treated as static assets

// PNG declaration
declare module "*.png" {
  const value: any;
  export default value;
}

// JPG declaration
declare module "*.jpg" {
  const value: any;
  export default value;
}

// JPEG declaration
declare module "*.jpeg" {
  const value: any;
  export default value;
}

// For .svg files, if we're importing them as React components (e.g. 'import
// Icon from './icon.svg''), we use React.FunctionComponent to provide type support

// SVG declaration
declare module "*.svg" {
  const value: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default value;
}
