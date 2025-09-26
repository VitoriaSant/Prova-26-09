<template>
    <h1>Reservas</h1>
    <form @submit.prevent="submit">

        <v-text-field v-model="fistname.value.value" :error-messages="fistname.errorMessage.value" label="Primeiro nome">
        </v-text-field>

        <v-text-field v-model="lastname.value.value" :error-messages="lastname.errorMessage.value" label="Sobrenome">
        </v-text-field>

        <v-text-field v-model="totalprice.value.value" :error-messages="totalprice.errorMessage.value" label="Preço toral">
        </v-text-field>

        <v-checkbox v-model="depositpaid.value.value" label="Pagamento em deposito"></v-checkbox>

        <h2>Data De inicio da reserva</h2>
        <div class="d-flex justify-center mb-2">
            <v-date-picker show-adjacent-months id="dataReservaIni" v-model="dataReservaIni.value.value" locale="pt-BR"
                :min="new Date().toISOString().split('T')[0]">
            </v-date-picker>
        </div>
        <div class="text-center mb-4">
            <div v-if="dataReservaIni.errorMessage.value" class="text-error text-caption">
                {{ dataReservaIni.errorMessage.value }}
            </div>
        </div>

        <h2>Data de fim da reserva</h2>
        <div class="d-flex justify-center mb-2">
            <v-date-picker show-adjacent-months id="dataReservaFim" v-model="dataReservaFim.value.value" locale="pt-BR"
                :min="new Date().toISOString().split('T')[0]">
            </v-date-picker>
        </div>
        <div class="text-center mb-4">
            <div v-if="dataReservaFim.errorMessage.value" class="text-error text-caption">
                {{ dataReservaFim.errorMessage.value }}
            </div>
        </div>

        <v-btn class="me-4" type="submit">
            Gravar
        </v-btn>
    </form>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'

const { handleSubmit } = useForm({
    validationSchema: {
        fistname(value: any){
            if (value?.length >= 1) return true
            return 'Nome precisa ter pelo menos 1 caracteres.'
        },
        lastname(value: any){
            if (value?.length >= 1) return true
            return 'Sobrenome precisa ter pelo menos 1 caracteres.'
        },
        totalprice(value: any) {
            if (value?.length >= 0) return true

            return 'Valor não pode ser negativo'
        },
        horaIni(value: any) {
            if (/^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/.test(value)) return true

            return 'O horário de início precisa ser válido (HH:MM).'
        },
        horaFim(value: any) {
            if (/^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/.test(value)) return true

            return 'O horário de fim precisa ser válido (HH:MM).'
        },
        dataReservaIni(value: any) {
            if (value) return true
            
            return 'Selecione uma data para o inicio da reserva.'
        },
        dataReservaFim(value: any) {
            if (value) return true
            
            return 'Selecione uma data para o fim da reserva.'
        },
    },
})
const descricao = useField('descricao')
const selectSala = useField('selectSala')
const selectUsuario = useField('selectUsuario')
const horaIni = useField('horaIni')
const horaFim = useField('horaFim')
const dataReservaIni = useField('dataReservaIni')
const dataReservaFim = useField('dataReservaFim')
const lastname = useField('lastname')
const fistname = useField('fistname')
const totalprice = useField('totalprice')
const depositpaid = useField('depositpaid')

const submit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
})

</script>
<style >
#dataReserva {
    margin-bottom: 40px;
    }
</style>