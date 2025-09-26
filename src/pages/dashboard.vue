<template>
    <v-table striped="even">
        <thead>
            <tr>
                <th class="text-left">
                    ID
                </th>
                <th class="text-left">
                   Nome
                </th>
                <th class="text-left">
                    Sobrenome
                </th>
                <th class="text-left">
                    Data inicial
                </th>
                <th class="text-left">
                    Data final
                </th>
                <th class="text-left">
                    Preço total
                </th>
                <th class="text-left">
                    Deposito pago
                </th><th class="text-left">
                   Necessidades adicionais
                </th><th class="text-left">
                    Ações
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="usuario in users" :key="usuario.bookingid">
                <td>{{ usuario.bookingid }}</td>
                <td>{{ usuario.booking.firstname}}</td>
                <td>{{ usuario.booking.lastname}}</td>
                <td>{{ usuario.booking.bookingdates.checkin}}</td>
                <td>{{ usuario.booking.bookingdates.checkout}}</td>
                <td>{{ usuario.booking.totalprice}}</td>
                <td>{{ usuario.booking.depositpaid}}</td>
                <td>{{ usuario.booking.additionalneeds}}</td>
                <td>
                    <v-btn size="small" color="primary" variant="outlined" class="me-2">
                        Editar
                    </v-btn>
                    <v-btn size="small" color="error" variant="outlined">
                        Excluir
                    </v-btn>
                </td>
            </tr>
        </tbody>
    </v-table>
</template>
<script lang="ts">
import userData from '@/database/reservas.json'

export default {
  data() {
    return {
      users: userData,
    };
  },
};

</script>