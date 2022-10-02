<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <div class="btn-toolbar mb-2 mb-md-0">
      <router-link to="/sales/create" class="btn btn-sm btn-outline-secondary">Add</router-link>
    </div>
  </div>

  <div class="table-responsive">
    <table class="table table-striped table-sm">
      <thead>
      <tr>
        <th>#</th>
        <th>Customer</th>
        <th>Order Date</th>
        <th>Delivery Date</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="sale in sales" :key="sale.id">
        <td>{{ sale.id }}</td>
        <td>{{ sale.customer.name }}</td>
        <td>{{ sale.order_date }}</td>
        <td>{{ sale.delivery_date }}</td>
        <td>
          <div class="btn-group mr-2">
            <router-link :to="`/sales/${sale.id}/edit`" class="btn btn-sm btn-outline-secondary">Edit
            </router-link>
            <a href="javascript:void(0)" class="btn btn-sm btn-outline-secondary" @click="del(sale.id)">Delete</a>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>

  <Paginator :last-page="lastPage" @page-changed="load($event)"/>
</template>

<script lang="ts">
import {ref, onMounted, computed} from 'vue';
import axios from 'axios';
import {Entity} from "@/interfaces/entity";
import {useStore} from "vuex";
import Paginator from "@/secure/components/Paginator.vue";

export default {
  name: "Sales",
  components: {
    Paginator
  },
  setup() {
    const sales = ref([]);
    const lastPage = ref(0);
    const store = useStore();

    // const authenticatedUser = computed(() => store.state.User.sale);

    const load = async (page = 1) => {
      const response = await axios.get(`sales?page=${page}`);

      sales.value = response.data.data;
      lastPage.value = response.data.meta.last_page;
    }

    const del = async (id: number) => {
      if (confirm('Are you sure you want to delete this record?')) {
        await axios.delete(`sales/${id}`);

        sales.value = sales.value.filter((e: Entity) => e.id !== id);
      }
    }

    onMounted(load);

    return {
      sales,
      lastPage,
      // authenticatedUser,
      del,
      load
    }
  }
}
</script>
