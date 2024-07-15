<script setup lang="ts">
const inputValue = ref<string>('')
const dialog = ref<boolean>(false)

const showConfirmDialog = () => {
  dialog.value = true
}

const snackbar = ref<boolean>(false)
const text = '更新に成功しました'

const confirmSave = () => {
  // 入力値を保存する処理
  console.log('Saved:', inputValue.value)
  dialog.value = false

  snackbar.value = true
}

</script>

<template>
  <div>
    <h2 class="heading__lv2">マイページ</h2>

    <v-container>
      <h3 class="heading__lv3">プロフィール</h3>
      作成日

      会員ステータス

      アカウント名
      <v-form @submit.prevent="showConfirmDialog">
        <v-text-field v-model="inputValue" label="Enter something" style="max-width: 50%;" />
        <v-btn type="submit">プロフィールを保存する</v-btn>
      </v-form>

      <!-- 確認ダイアログ -->
      <v-dialog v-model="dialog" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">Confirm</v-card-title>
          <v-card-text>プロフィール情報を更新しますか？</v-card-text>

          <v-card-actions class="mb-4">
            <v-btn color="blue darken-1" text @click="dialog = false">いいえ</v-btn>
            <v-btn color="blue darken-1" text @click="confirmSave">はい</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-snackbar v-model="snackbar">
        {{ text }}

        <template v-slot:actions>
          <v-btn color="pink" variant="text" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>

    </v-container>

    <v-container>
      <h3 class="heading__lv3">お気に入り</h3>

      <v-card>

      </v-card>
    </v-container>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>