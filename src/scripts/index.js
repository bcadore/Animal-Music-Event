const dataEvento = new Date("Nov 25, 2024 07:36:00");
const timeStampEvento = dataEvento.getTime();

const contadorHorario = setInterval(function () {
  const agora = new Date();
  const timeStampAtual = agora.getTime();

  const distanciaAteEvento = timeStampEvento - timeStampAtual;

  const dia = 1000 * 60 * 60 * 24; //Dia representado em ms
  const hora = 1000 * 60 * 60; //Hora representado em ms
  const minuto = 1000 * 60; //Minuti representado em ms

  const diasAteEvento = Math.floor(distanciaAteEvento / dia);
  const horasAteEvento = Math.floor((distanciaAteEvento % dia) / hora);
  const minutosAteEvento = Math.floor((distanciaAteEvento % hora) / minuto);
  const segundosAteEvento = Math.floor((distanciaAteEvento % minuto) / 1000);

  document.getElementById(
    "eventDate"
  ).innerHTML = `${diasAteEvento} dias ${horasAteEvento} hrs ${minutosAteEvento} min ${segundosAteEvento} seg`;

  if (distanciaAteEvento < 0) {
    clearInterval(contadorHorario);
    document.getElementById("eventDate").innerHTML = `Evento Expirado :(`;
  }
}, 1000);
