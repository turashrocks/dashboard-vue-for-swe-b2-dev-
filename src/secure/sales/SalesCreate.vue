<template>
  <form @submit.prevent="submit">
    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control" name="name" v-model="name"/>
    </div>
    <div class="form-group">
      <label>Batch Name</label>
      <input type="text" class="form-control" name="batch_name" v-model="batchName"/>
    </div>

    <div class="form-group">
      <label>Customer</label>
      <select name="customer_id" class="form-control" v-model="customerId">
        <option value="0">Select Customer</option>
        <option v-for="customer in customers" :key="customer.id" :value="customer.id">
          {{ customer.name }}
        </option>
      </select>
    </div>

    <button class="btn btn-outline-secondary">Save</button>
  </form>
</template>

<script>
import {ref, onMounted} from 'vue';
import axios from 'axios';
import {useRouter} from "vue-router";

export default {
  name: "SalesCreate",
  setup() {
    const name = ref('');
    const batchName = ref('');
    const customerId = ref(0);
    const customers = ref([]);
    const router = useRouter();

    onMounted(async () => {
      const response = await axios.get('customers');

      customers.value = response.data.data;
    });

    const submit = async () => {
      await axios.post('sales', {
        name: name.value,
        batch_name: batchName.value,
        customer_id: customerId.value
      });

      await router.push('/sales');
    }

    return {
      name,
      batchName,
      customerId,
      customers,
      submit
    }
  }
}
</script>
