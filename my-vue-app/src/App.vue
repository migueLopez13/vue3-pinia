<script setup lang="ts">
import { useStore } from './state/store';
const store = useStore()
</script>

<template>
  <h1>Hello App!</h1>
  <p>
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
    <router-link to="/hello">Go to HelloWorld</router-link>
  </p>
  <button @click="store.counter++">Counter: {{ store.counter }}</button>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
