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
                <o-table-column field="status" v-slot="props" label="Status">
                    {{ props.row.fields.status }}
                </o-table-column>
                <o-table-column field="add_date" v-slot="props" label="Data dodania">
                    {{ props.row.fields.add_date }}
                </o-table-column>
                <o-table-column field="accept_date" v-slot="props" label="Data zaakceptowania">
                    {{ props.row.fields.accept_date }}
                </o-table-column>
                <o-table-column field="person_count" v-slot="props" label="Liczba osób">
                    {{ props.row.fields.person_count }}
                </o-table-column>
                <o-table-column field="is_online" v-slot="props" label="Online">
                    {{ props.row.fields.is_online }}
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

    const { data: response } = await useFetch(`http://127.0.0.1:8000/backend/game/get_status?value=1`);
    console.log(JSON.parse(response.value.data));
    const tmp = JSON.parse(response.value.data)
    const data = ref(tmp);
</script>

<script>
    export default {
        fetchOnServer: false,
    };
</script>