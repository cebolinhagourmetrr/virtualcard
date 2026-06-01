const copyButton = document.getElementById("copyContact");

if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const contactText = [
      "Cebolinha Gourmet",
      "WhatsApp: +55 00 00000-0000",
      "Instagram: @cebolinhagourmet",
    ].join("\n");

    try {
      await navigator.clipboard.writeText(contactText);
      copyButton.textContent = "Contato copiado!";
      window.setTimeout(() => {
        copyButton.textContent = "Copiar contato";
      }, 1800);
    } catch (error) {
      copyButton.textContent = "Nao foi possivel copiar";
      window.setTimeout(() => {
        copyButton.textContent = "Copiar contato";
      }, 1800);
    }
  });
}
