<template>
  <div class="columns  is-vcentered is-mobile">
    <div class="column is-2">
      <button @click="addItem(item)"
       class="button  is-success"
      >
        ADD
      </button>
    </div>

    <div class="column is-6">
      <figure class="image is-square">
      <img  :src="item.image" :alt="item.name" />
      </figure>
    </div>

    <div class="column is-4">
      <h3 class="text-primary title is-3">{{ item.name }}</h3>
      <p class="mb-0">{{ item.description }}</p>
      <div class="title is-5 level-right">
        <span class="label"></span> {{ item.price | dollar  }}
      </div>
    </div>
  </div>

</template>

<script>

export default {
  props: ['item'],

  filters: {
    dollar(value) {
      return '$' + Number.parseFloat(value).toFixed(2)
    }
  },
  methods: {
    addItem(item) {
      this.$store.commit('addItem', item)
  }
}
}
</script>
