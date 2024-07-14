<script lang="ts" setup>
const config = useRuntimeConfig()
const appName = config.public.appName
</script>

<template>
  <div>
    <h2>Home Page</h2>
    <p>Vuetifyのテスト</p>
  </div>

  <v-container>
    <v-card variant="outlined">
      <p>{{ appName }}</p>
      <v-btn color="primary" variant="outlined">ボタン</v-btn>
    </v-card>
  </v-container>

  <v-card>
    <p>aaa</p>
    <v-btn color="primary">ボタン</v-btn>
  </v-card>

  <v-row>
    <v-col>
      aaaa
    </v-col>
    <v-col>
      bbbbb
    </v-col>
  </v-row>
  <v-card>
    <p>bbb</p>
  </v-card>

  <AtomsSample />
</template>
