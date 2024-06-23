export function useSample() {
  const message = ref('Hello from composables!')

  function showMessage() {
    console.log(message.value)
  }

  return {
    message,
    showMessage,
  }
}
