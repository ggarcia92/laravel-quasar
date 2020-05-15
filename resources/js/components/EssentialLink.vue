<template>
  <q-item
    clickable
    :to="blank? null : link"
    :target="blank? '_blank' : ''"
    :tag="blank? 'a' : null"
    :href="blank? link : null"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String | Object,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    },
    blank: {
      type: Boolean,
      default: false
    }
  }
}
</script>
