class Example extends React.Component {
  constructor(props){ 
    super(props); 
    this.state = {sum: 0,num1: 0,num2: 0}; 
  };

  sumNumbers() {
    this.setState(state => ({sum: Number(this.state.num1) + Number(this.state.num2)}));
  };

  putNum1(e){
    this.setState(state => ({ num1: document.getElementById('numero1').value}));
  };

  putNum2(){
    this.setState(state => ({ num2: document.getElementById('numero2').value}))
  };

  render() {
    return (
      <div>
        <p>Escolha dois números para serem somados</p>
        <input id="numero1" onChange={e => this.putNum1(e.target.value)}/>
        <br/>
        <input id="numero2" onChange={e => this.putNum2(e.target.value)}/>
        <br/>
        <button onClick={() => this.sumNumbers()}>Somar</button>
        <p>Resultado da soma: {this.state.sum}</p>
      </div>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById('root'));