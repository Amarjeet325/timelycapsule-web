export default function useClipboard() {
  const isClipboardAvailable = window && !!window.navigator?.clipboard;

  return {
    isAvailable: isClipboardAvailable,
    copyText,
  };

  function copyText(text: string) {
    window.navigator?.clipboard.writeText(text);
  }
}
