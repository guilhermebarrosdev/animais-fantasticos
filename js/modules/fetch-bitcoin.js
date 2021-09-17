export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector(target);
      btcPreco.textContent = 10 / bitcoin.BRL.sell.toFixed(8);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
