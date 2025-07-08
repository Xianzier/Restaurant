<template>
  <div class="counter-container">
    <!-- 标题 -->
    <h1>{{ pageTitle }}</h1>
    
    <!-- 计数器显示 -->
    <div class="counter-display">
      <p>当前计数: <span :class="{ 'highlight': count > 5 }">{{ count }}</span></p>
    </div>
    
    <!-- 操作按钮 -->
    <div class="button-group">
      <button @click="increment" class="btn increment">增加</button>
      <button @click="decrement" class="btn decrement">减少</button>
      <button @click="reset" class="btn reset">重置</button>
    </div>
    
    <!-- 状态提示 -->
    <p v-if="count === 0" class="hint">计数器已归零</p>
    <p v-else-if="count > 10" class="hint warning">计数超过10!</p>
  </div>
</template>

<script>
export default {
  name: 'CounterPage',
  data() {
    return {
      pageTitle: "简易计数器",
      count: 0
    }
  },
  methods: {
    increment() {
      this.count += 1;
    },
    decrement() {
      if (this.count > 0) {
        this.count -= 1;
      }
    },
    reset() {
      this.count = 0;
    }
  },
  // 生命周期钩子示例
  mounted() {
    console.log("计数器页面已加载");
  }
}
</script>

<style scoped>
.counter-container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  text-align: center;
  background-color: #f8f9fa;
}

.counter-display {
  font-size: 2rem;
  margin: 1.5rem 0;
}

.highlight {
  color: #42b983;
  font-weight: bold;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s;
}

.increment {
  background-color: #42b983;
  color: white;
}

.decrement {
  background-color: #f56c6c;
  color: white;
}

.reset {
  background-color: #e6a23c;
  color: white;
}

.btn:hover {
  opacity: 0.85;
  transform: translateY(-2px);
}

.hint {
  color: #909399;
  font-style: italic;
}

.warning {
  color: #e6a23c;
  font-weight: bold;
}
</style>