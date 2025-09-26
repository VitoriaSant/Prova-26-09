<template>
  <div>
    <NavbarMenu v-if="!isLoginPage" />
    <router-view v-if="isLoginPage" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import NavbarMenu from '@/components/navbarMenu.vue'

const route = useRoute()

const isLoginPage = computed(() => route.path === '/login')
</script>
