<template>
    <div class="panel">
        <div>
            <o-table
                    :data="data"
                    :mobile-cards="true"
                    :hoverable="true"
                    :isLoading="true"
            >
                <o-table-column field="name" v-slot="props" label="Nazwa">
                    {{ props.row.fields.name }}
                </o-table-column>
                <o-table-column field="owner_id" v-slot="props" label="Właściciel">
                    {{ props.row.fields.owner_id }}
                </o-table-column>

                <o-table-column field="game_id" v-slot="props" label="Gra">
                    {{ props.row.fields.game_id }}
                </o-table-column>
                <o-table-column field="meeting_date" v-slot="props" label="Data spotkania">
                    {{ props.row.fields.meeting_date }}
                </o-table-column>
                <o-table-column field="pk" v-slot="props" label="Akcje">
                    {{ props.row.pk }}
                </o-table-column>
            </o-table>
        </div>
    </div>
</template>

<script setup>
    import {useFetch} from "nuxt/app";
    import {useLoginStore} from "~/stores/login";

    const loginStore = useLoginStore();
    const username = loginStore.user_id;

    const { data: response } = await useFetch(`http://127.0.0.1:8000/backend/meeting/user?id=${username}`);

    const tmp = JSON.parse(response.value.data)
    console.log(tmp);
    const data = ref(tmp);
</script>

<script>
    export default {
        fetchOnServer: false,
    };
</script>