<template>
  <label>
    <input type="radio" :name="name">
    <svg>
      <use xlink:href="#vote-checkbox"></use>
    </svg>
  </label>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
  },
}
</script>

<style lang="scss" scoped>
label {
  position: relative;
  display: flex;
  justify-content: center;
}

input[type=radio] {
  position: absolute;
  opacity: 0;

  + svg {
    width: 32px;
    height: 32px;
    --tick-color: transparent;
    --tick-outline: transparent;
  }

  &:hover + svg {
    --tick-color: rgba(127, 127, 127, .3);
  }

  &:checked + svg {
    --tick-color: #e91e43;
    --tick-outline: #fff;
  }
}
</style>
