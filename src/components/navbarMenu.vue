<template>
    <v-app>
        <v-app-bar>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Sistema de Reservas</v-toolbar-title>
            <v-btn @click="logout">Sair</v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false">
            
            <v-divider></v-divider>
            <v-list density="compact" nav>
                <v-list-item prepend-icon="mdi-home" @click="navigateTo('dashboard')" title="Dashboard"
                    value="dashboard"></v-list-item>

                <v-list-group v-model="cadastrosOpen">
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" prepend-icon="mdi-clipboard-edit-outline" title="Cadastros">
                        </v-list-item>
                    </template>

                    <v-list-item prepend-icon="mdi-calendar" @click="navigateTo('reservas')" title="Reservas"
                        value="reservas"></v-list-item>

                </v-list-group>


            </v-list>
        </v-navigation-drawer>

        <v-main>
            <v-container>
                <router-view />
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { authService } from '@/services/login'

const drawer = ref(false)
const rail = ref(false)
const cadastrosOpen = ref(true)
const router = useRouter()

function navigateTo(value: string) {
    cadastrosOpen.value = true
    
    switch (value) {
        case 'dashboard':
            router.push('/dashboard')
            break;
        case 'reservas':
            router.push('/reserva')
            break;
    }
}

function logout(){
    authService.removeToken();
    router.push('/login');
}
</script>