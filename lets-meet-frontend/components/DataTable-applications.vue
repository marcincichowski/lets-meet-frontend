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
                  <button @click.native="acceptGame(props.row.pk)" class="button is-small is-secondary">Akceptuj</button>

                </o-table-column>
            </o-table>
        </div>
    </div>
</template>

<script setup>
    import {useRouter, useFetch} from "nuxt/app";
    import {useLoginStore} from "~/stores/login";
    import Swal from "sweetalert2";

    const { data: response } = await useFetch(`http://127.0.0.1:8000/backend/game/get_status?value=0`);
    const router = useRouter();
    const tmp = JSON.parse(response.value.data)
    console.log(tmp);
    const data = ref(tmp);


    const acceptGame = async (id) => {
      try {
        console.log(id);
        const {data: response} = await useFetch(`http://127.0.0.1:8000/backend/game/accept?id=${id}`);
        console.log(response.value);
        Swal.fire({
          text: "Wniosek zaakceptowany!",
          icon: "success",
          footer: '',
          confirmButtonColor: "#0c5dd7"
        });
        router.push('/applications')
      }
      catch{
        Swal.fire({
          text: "Błąd akceptacji wniosku!",
          icon: "error",
          footer: '',
          confirmButtonColor: "#0c5dd7"
        });
      }

    }
</script>

<script>
    export default {
        fetchOnServer: false,
    };
</script>