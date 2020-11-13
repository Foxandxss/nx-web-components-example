import JSXify from 'jsxify';
import { MyCounter } from '@ejemplo/counter';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'my-counter': JSXify<MyCounter>;
    }
  }
}
