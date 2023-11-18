<template>
    <footer>
      <div>
        Powered by
        <a href="/" title="作者">嘟嘟</a>
      </div>
      |
      <div>Copyright © 2023-present</div>
      |
      <div>Released under the MIT License</div>
      |
      <div>
        Views:
        <img class="views" src="https://access-counter.fedtop.com/api/number-counter?name=fedtop&length=7" alt="" />
      </div>
    </footer>
  </template>
  <script lang="ts" setup></script>
  <style scoped lang="scss">
  footer {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 32px;
    color: var(--vp-c-text);
    border-top: 1px solid var(--vp-c-gutter);
    background-color: var(--vp-c-bg);
    a {
      color: var(--vp-c-brand);
      font-weight: bold;
    }
    .views {
      display: inline-block;
    }
  }
  </style>
  