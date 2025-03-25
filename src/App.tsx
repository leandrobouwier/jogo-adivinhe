import styles from "./app.module.css"

import { Input } from "./components/Input"
import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"

function handleRestartGame() {
  alert("Reiniciar o jogo")
}

export default function App() {
  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />
        <Tip tip="Uma das Linguagens de programacao mais utilizadas" />
        <div className={styles.word}>
          <Letter value="R" />
          <Letter value="E" />
          <Letter value="A" />
          <Letter value="C" />
          <Letter value="T" />
        </div>

        <h4>Palpite</h4>
        <div>
          <Input />
        </div>
      </main>
    </div>
  )
}
