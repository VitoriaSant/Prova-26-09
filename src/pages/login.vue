<template>
    <v-app>
        <v-main>
            <v-container fluid class="fill-height d-flex align-center justify-center">
                <v-card class="pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
                    <div class="text-center mb-6">
                        <h2 class="text-h4 mb-2">Sistema de Reservas</h2>
                    </div>
                    
                    <div class="text-subtitle-1 text-medium-emphasis">Nome do usuario</div>

                <v-text-field 
                    v-model="username"
                    density="compact" 
                    placeholder="Nome" 
                    prepend-inner-icon="mdi-email-outline"
                    variant="outlined">
                </v-text-field>

                <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                    Senha
                </div>

                <v-text-field 
                    v-model="password"
                    :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" 
                    :type="visible ? 'text' : 'password'"
                    density="compact" 
                    placeholder="Digite sua senha" 
                    prepend-inner-icon="mdi-lock-outline"
                    variant="outlined" 
                    @click:append-inner="visible = !visible">
                </v-text-field>

                <v-btn @click="login" class="mb-8" color="blue" size="large" variant="tonal" block>
                    Acessar
                </v-btn>
                </v-card>
            </v-container>
        </v-main>
    </v-app>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { api } from '@/services/api'
import { authService } from '@/services/login'
import { LoginService } from '@/services/login'

const visible = ref(false)
const username= ref('')
const password = ref('')
const router = useRouter()

async function login () {
    try {
        const loginService = new LoginService();
        const response = await loginService.autenticar(username.value, password.value);
        console.log(response)
        if (response) {
            authService.setToken(response);
            console.log('Login bem-sucedido, token armazenado.');
            router.push('/dashboard');
        }
    
    } catch (error) {
        console.error('Erro no login:', error);
    }
} 

</script>
