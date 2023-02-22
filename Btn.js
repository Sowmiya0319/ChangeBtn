import React from 'react';
class Btn extends React.Component{
    constructor(props)
    {
        super(props);
        this.state=
        {
          a:5,
          b:4,
          c:5,
          d:3

        };

    }
    changeA=()=>
    {
        this.setState({a:"2"});    
    }
     changeB=()=>
     {
        this.setState({b:"5"});
     }
     changeC=()=>
     {
        this.setState({c:"9"});
     }
     changeD=()=>
     {
        this.setState({b:"6"});
     }
     changeAll=()=>
     {
        this.setState({a:"3" , b:"5" , c:"3" , d:"7" , e:"8"})
     }
    render()
    {
        return(
            <>
    <button onClick={this.changeA}>Change a</button>
    <br></br>
    <br></br>
    <button onClick={this.changeB}>Change b</button>
    <br></br>
    <br></br>
    <button onClick={this.changeC}>Change c</button>
    <br></br>
    <br></br>
    <button onClick={this.changeD}>Change d</button>
    <br></br>
    <br></br>
    <button onClick={this.changeAll}>change All</button>
    <br></br>
    <br></br>
    <h1>{this.state.a* this.state.b * this.state.c * this.state.d }</h1>
    </>
        );
    }
    

}
export default Btn;