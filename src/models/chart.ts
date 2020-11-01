import {g6Req} from '@/services'
import G6 from '@antv/g6';
export default {
    namespace: 'chart',
    state: {
        data: {}
    },
    effects: {
        *getG6Data ({payload},{call,put}) {
            const result = yield call(g6Req)
            const width = 500
            const height = 300
            const graph = new G6.TreeGraph({
              container: 'container',
              width,
              height,
              modes: {
                default: [
                  {
                    type: 'collapse-expand',
                    onChange: function onChange(item, collapsed) {
                      const data = item.get('model').data;
                      data.collapsed = collapsed;
                      return true;
                    },
                  },
                  'drag-canvas',
                  'zoom-canvas',
                ],
              },
              defaultNode: {
                size: 26,
                anchorPoints: [
                  [0, 0.5],
                  [1, 0.5],
                ],
                style: {
                  fill: '#C6E5FF',
                  stroke: '#5B8FF9',
                },
              },
              defaultEdge: {
                type: 'cubic-horizontal',
                style: {
                  stroke: '#A3B1BF',
                },
              },
              layout: {
                type: 'mindmap',
                direction: 'H',
                getHeight: () => {
                  return 16;
                },
                getWidth: () => {
                  return 16;
                },
                getVGap: () => {
                  return 10;
                },
                getHGap: () => {
                  return 50;
                },
                getSide: (d) => {
                  if (d.id === 'Classification') {
                    return 'left';
                  }
                  return 'right';
                },
              },
            });
        
            let centerX = 0;
            graph.node(function (node) {
              if (node.id === 'Modeling Methods') {
                centerX = node.x;
              }
        
              return {
                label: node.id,
                labelCfg: {
                  position:
                    node.children && node.children.length > 0
                      ? 'left'
                      : node.x > centerX
                      ? 'right'
                      : 'left',
                  offset: 5,
                },
              };
            });
        
            graph.data(result);
            graph.render();
            graph.fitView();
        }
    },
    reducers: {}
}