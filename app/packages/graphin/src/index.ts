import { Item } from '@antv/g6/lib/types';
import Graphin from './Graphin';
import Utils from './utils';
import Layout from './layout';

export { default as G6 } from '@antv/g6';

export default Graphin;
export { Utils, Layout };

export * from './types';

export interface GraphEvent extends MouseEvent {
  item: Item;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  target: any;
}
