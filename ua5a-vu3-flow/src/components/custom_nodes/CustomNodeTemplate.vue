<script setup>
import { ref ,computed} from "vue";
import { VueFlow,Handle, Position } from "@braks/vue-flow";

const props = defineProps({
  data: {
    type: Object,
    // required: true,
    default: { 
      name: '',
      backgroundColor: "#fff",
      borderColor: "#000",
      color: "#000",
      linearStartColor: "#fff",
      linearEndColor: "#ccc",
      hoverBorderColor: "#000",
      hoverColor: "#000",
      source: "Center",
      target: "Center",
    },
  },
  label: {
    type: String,
    required: true,
  }
});

// const sourceHandleStyleA = computed(() => ({
//   bottom: "0",
//   top: "auto",
// }));
// const sourceHandleStyleB = computed(() => ({
//   top: "0",
// }));

const emit = defineEmits(["change", "gradient"]);
</script>

<template>
  <div class="vue-flow__node-custom" @click="click" :style="props.data.style">
    <div v-html="props.label"></div>
  </div>

  <Handle class="source-class-center" v-if="props.data.source === 'Center'" type="source" :position="Position.Bottom"  />
  <Handle class="target-class-center" v-if="props.data.target === 'Center'" type="target" :position="Position.Top"  />
  
  <Handle class="target-class-top" v-if="props.data.target === 'Top'" type="target" :position="Position.Top"  />
  <Handle class="target-class-bottom" v-if="props.data.target === 'Bottom'" type="target" :position="Position.Bottom"  />
  <Handle class="target-class-right" v-if="props.data.target === 'Right'" type="target" :position="Position.Right"  />
  <Handle class="target-class-left" v-if="props.data.target === 'Left'" type="target" :position="Position.Left"  />
  <Handle class="source-class-bottom" v-if="props.data.source === 'Bottom'" type="source" :position="Position.Bottom"  />
  <Handle class="source-class-top" v-if="props.data.source === 'Top'" type="source" :position="Position.Top"  />
  <Handle class="source-class-right" v-if="props.data.source === 'Right'" type="source" :position="Position.Right"  />
  <Handle class="source-class-left" v-if="props.data.source === 'Left'" type="source" :position="Position.Left"  />
</template>

<style scoped>

.vue-flow__node-custom {
  pointer-events: all;
  background: v-bind('props.data.backgroundColor');
  border: 1px solid v-bind('props.data.borderColor');
  color: v-bind('props.data.color');
  border-radius: 3px;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  transition: 0.3s all;
  padding: 0 10px;
  width: calc(120px - 20px);
  min-height: 30px;
  line-height: 30px;
}

.vue-flow__node-custom:hover {
  background: linear-gradient(
    -90deg, 
    v-bind('props.data.linearStartColor'),
    v-bind('props.data.linearEndColor'),
    v-bind('props.data.linearStartColor')
  );
  background-repeat: repeat-x;
  background-size: 200% 100%;
  border: 1px solid v-bind('props.data.hoverBorderColor');
  color: v-bind('props.data.hoverColor');

  animation: moveBG 2s linear infinite;
}



.target-class-center,
.source-class-center{
  top: auto;
  bottom: calc(50% - 0px);
  opacity: 0;
  z-index: -1;
}
.target-class-top,
.source-class-bottom{
  top: calc(50% - 4px);
  opacity: 0;
}
.target-class-bottom,
.source-class-top{
  top: auto;
  bottom:  calc(50% - 4px);
  opacity: 0;
}

.target-class-right,
.source-class-left{
  left: calc(50% - 4px);
  opacity: 0;
}

.target-class-left,
.source-class-right{
  left: auto;
  right: calc(50% - 4px);
  opacity: 0;
}


@keyframes moveBG {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: -200% 0%;
  }
}
</style>