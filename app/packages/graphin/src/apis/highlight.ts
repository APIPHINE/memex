import { Graph } from '@antv/g6';

const highlight = (graph: Graph) => (nodeIds: string[]) => {
  graph.getNodes().forEach((node) => {
    graph.clearItemStates(node, ['highlight.light', 'highlight.dark']);
    if (nodeIds.indexOf(node.get('id')) !== -1) {
      graph.setItemState(node, 'highlight.light', false);
    } else {
      graph.setItemState(node, 'highlight.dark', true);
    }
  });
};

export default highlight;
