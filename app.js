function Joke(props) {
  return (
    <div>
      {props.setup && <h3>Setup: {props.setup}</h3>}
      <p>Punchline: {props.punchline}</p>
      <hr></hr>
    </div>
  );
}

function App() {
  return (
    <div>
      <Joke punchline="Травма мозга была нанесена чем-то тяжёлым и тупым. Предположительно вопросом."></Joke>
      <Joke
        setup="Что делать, если компьютер перестал работать?"
        punchline="Если вы юзеp – делать ноги. Если ремонтник – делать деньги. А если программист – делать вид, что так и было задумано."
      ></Joke>
      <Joke
        setup="Обвиняемый, что еще вы хотели бы сказать в свое оправдание?"
        punchline="Я прошу принять во внимание молодость и неопытность моего адвоката."
      ></Joke>
      <Joke
        setup="Официант, можно мне кофе?"
        punchline="Откуда я знаю, я что, доктор, что ли?"
      ></Joke>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
