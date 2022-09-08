<template>
  <div style="height: calc(100vh)">
    <VueFlow @moveEnd="moveEnd" @nodeClick="nodeClick">
      <Background pattern-color="#aaa" size="0.4" gap="10" variant="dots" />

      <template #node-ua5a="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
          
        />
      </template>
      <template #node-aorus="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
          
        />
      </template>
      <template #node-b2c="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
          
        />
      </template>
      <template #node-sales="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
          
        />
      </template>
      <template #node-powerbi="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
          
        />
      </template>
      <template #node-ai="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
          
        />
      </template>
      <template #node-cxm="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
          
        />
      </template>
      <template #node-erp="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
          
        />
      </template>
      <template #node-plm="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
          
        />
      </template>
      <template #node-cn="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
          
        />
      </template>
      <template #node-scm="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
          
        />
      </template>

      <template #node-aorus2.0="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
          
        />
      </template>
      <template #node-member="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
          
        />
      </template>
      <template #node-productregister="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
          
        />
      </template>
      <template #node-productpageseo="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
          
        />
      </template>
      <template #node-EC="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
          
        />
      </template>
      <template #node-gamebundle="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
          
        />
      </template>
      <template #node-wallpaper="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
          
        />
      </template>
      <template #node-cms="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
          
        />
      </template>
      <template #node-autotrans="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
          
        />
      </template>
      <template #node-gbtru="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
          
        />
      </template>
      <template #node-invoiceAi="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
          
        />
      </template>
      <template #node-warranty="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
          
        />
      </template>
      <template #node-repair="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
          
        />
      </template>

      
      <template #node-crm="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
          
        />
      </template>
      <template #node-app="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
        />
      </template>
      <template #node-order="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
        />
      </template>
      <template #node-esign="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
        />
      </template>
      <template #node-customerprofile="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
        />
      </template>

      <template #node-rolling="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
        />
      </template>

      <template #node-workflow="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
        />
      </template>
      <template #node-pm="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
        />
      </template>
      <template #node-budget="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
        />
      </template>
      <template #node-pmprice="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
        />
      </template>
      <template #node-volume="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
        />
      </template>
      <template #node-DCM="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
        />
      </template>
      <template #node-rollingorder="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
        />
      </template>
      <template #node-rolling2="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
        />
      </template>
      <template #node-nucleation="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
        />
      </template>
      <template #node-addorder="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
        />
      </template>
      <template #node-proposal="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
        />
      </template>
      <template #node-epayment="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
        />
      </template>
      <template #node-ecredit="props">
        <NodeTemplate
          :data="props.data"
          :label="props.label"
        />
      </template>

      <MiniMap />
      <Controls />
    </VueFlow>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import {
  useVueFlow,
  Background,
  Controls,
  MiniMap,
  VueFlow,
  Position,
  MarkerType,
} from "@braks/vue-flow";
import NodeTemplate from "./custom_nodes/CustomNodeTemplate.vue";
import { nodes_parent, edges_parent } from "./custom_nodes/nodes_edges_parent";
import { nodes_aorus, edges_aorus } from "./custom_nodes/nodes_edges_aorus";
import { nodes_sales, edges_sales } from "./custom_nodes/nodes_edges_sales";
import { nodes_b2c, edges_b2c } from "./custom_nodes/nodes_edges_b2c";

const initialNodes = ref([...nodes_parent, ...nodes_aorus, ...nodes_sales, ...nodes_b2c]);
const initialEdges = ref([...edges_parent, ...edges_aorus, ...edges_sales, ...edges_b2c]);

const { nodes, edges, setTransform, setInteractive, nodeProps } = useVueFlow({
  nodes: initialNodes.value,
  edges: initialEdges.value,
  defaultZoom: 2,
  maxZoom: 4,
  minZoom: 1,
});

const aorusChild = ref([]);
const salesChild = ref([]);
const b2cChild = ref([]);

const initialChildNodeIdList = () => {

  for (var key in nodes_aorus) aorusChild.value.push(nodes_aorus[key].id);
  for (var key in nodes_sales) salesChild.value.push(nodes_sales[key].id);
  for (var key in nodes_b2c) b2cChild.value.push(nodes_b2c[key].id);

  for (var key in edges_aorus) aorusChild.value.push(edges_aorus[key].id);
  for (var key in edges_sales) salesChild.value.push(edges_sales[key].id);
  for (var key in edges_b2c) b2cChild.value.push(edges_b2c[key].id);
};

initialChildNodeIdList();

const default_x = ref(0);
const default_y = ref(0);
const old_x = ref(0);
const old_y = ref(0);
const old_zoom = ref(1);

const hideNodes = (list) => {
  nodes.value.forEach((n) => {
    for (var key in list) {
      if (n.id === list[key]) {
        n.style.animation = "openOut 0.5s ease-in-out";

        setTimeout(() => {
          n.hidden = true;
        }, 500);
        break;
      }
    }
  });
  edges.value.forEach((n) => {
    for (var key in list) {
      if (n.id === list[key]) {
        n.style.animationName = "openIn";
        n.style.animation = "openOut 0.5s ease-in-out";
        // }
        setTimeout(() => {
          n.hidden = true;
          n.style.animation = "dashdraw 0.5s linear";
        }, 500);
        break;
      }
    }
  });
};
const showNodes = (list) => {
  nodes.value.forEach((n) => {
    for (var key in list) {
      if (n.id === list[key]) {
        n.style.animation = "openIn 0.5s ease-in-out";
        setTimeout(() => {
          n.hidden = false;
        }, 500);
        break;
      }
    }
  });
  edges.value.forEach((n) => {
    for (var key in list) {
      if (n.id === list[key]) {
        n.style.animationIterationCount = "infinite";
        setTimeout(() => {
          n.hidden = false;
        }, 500);
        break;
      }
    }
  });
};

const nodeClick = (e) => {
  console.log(e);
  switch (e.node.id) {
    case "UA5A":
      openAndCloseAllNode(e);
      break;
    case "AORUS":
      moveToNode(e, 1);
      showNodes(aorusChild.value);
      break;
    case "SALES":
      moveToNode(e, 1);
      showNodes(salesChild.value);
      break;
    case "B2C":
      moveToNode(e, 1);
      showNodes(b2cChild.value);
      break;
  }
};
const allNodeOpenStatus = ref(false);

const openAndCloseAllNode = (e) => {
  let nodeIDList = [];

  for (var key in initialNodes.value) {
    if (initialNodes.value[key].nodeType)
      nodeIDList.push(initialNodes.value[key].id);
  }

  if (allNodeOpenStatus.value) {
    if(e) moveToNode(e, 2.5);
    hideNodes(nodeIDList);
    allNodeOpenStatus.value = false;
  } else {
    if(e) moveToNode(e, 1);
    showNodes(nodeIDList);
    allNodeOpenStatus.value = true;
  }
};

const onChange = (data) => {
  console.log(data);
};

const moveToNode = (target, _zoom) => {
  let zoom = _zoom;
  moveFlow(
    default_x.value -
      (target.node.position.x * zoom +
        (target.node.dimensions.width * zoom) / 2),
    default_y.value -
      (target.node.position.y * zoom +
        (target.node.dimensions.height * zoom) / 2),
    zoom
  );
};

var moveEnd = (e) => {
  old_x.value = e.flowTransform.x;
  old_y.value = e.flowTransform.y;
  old_zoom.value = e.flowTransform.zoom;
};

const moveFlow = (x, y, zoom) => {
  var _x = old_x.value,
    _y = old_y.value,
    _z = old_zoom.value,
    i = 1,
    dx = _x - x,
    dy = _y - y,
    dz = _z - zoom,
    count = 60,
    delay = 10;

  function loop() {
    if (i >= count) {
      old_x.value = x;
      old_y.value = y;
      old_zoom.value = zoom;
      return;
    }
    i += 1;

    setTransform({
      x: (_x - (dx * i) / count).toFixed(0),
      y: (_y - (dy * i) / count).toFixed(0),
      zoom: (_z - (dz * i) / count).toFixed(2),
    });
    setTimeout(loop, delay);
  }

  loop();

  // setTransform({ x: x, y: y, zoom: zoom });
};

onMounted(() => {
  setInteractive(false);

  let zoom = 1;

  default_x.value = window.innerWidth / 2;
  default_y.value = window.innerHeight / 2;
  old_x.value = default_x.value - (120 * zoom) / 2;
  old_y.value = default_y.value - (30 * zoom) / 2;
  old_zoom.value = zoom;

  setTransform({
    x: old_x.value,
    y: old_y.value,
    zoom: zoom,
  });
  openAndCloseAllNode();
});
</script>

<style scoped>
</style>
