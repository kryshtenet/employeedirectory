import React from 'react';

class App extends React.Component {
  constructor() {
     super();
     this.state = {
        name: "",
        filteredData: [],
        data: 
        [
           {
              "name": "John Smith",
              "email":"jsmith@trilogy.com",
              "phone":"(800)333-3333"
           },
           {
              "name":"Alex Smith",
              "email":"asmith@trilogy.com",
              "phone":"(888)222-2222"
           },
           {
              "name":"Kelly Snow",
              "email":"ksnow@trilogy.com",
              "phone":"(866)111-1111"
           }
        ]
     }
  }

  handleInputChange = event => {
   // Getting the value and name of the input which triggered the change
   const { name, value } = event.target;

   // Updating the input's state
   this.setState({
     [name]: value
   });
 };

   render() {
      return (
         <div>
            <Header/>
            <input 
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}/>
            <table>
               <tbody>
                  {this.state.data.filter(person=>person.name.includes(this.state.name)).map((person,i)=><TableRow key = {i} 
                  data = {person} />)}
               </tbody>
            </table>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}
class TableRow extends React.Component {
   render() {
      return (
         <tr style={{padding:"20px", border:"1px black"}}>
            <td style={{padding:"20px", border:"1px black"}}>Name {this.props.data.name}</td>
            <td>Email {this.props.data.email}</td>
            <td>Phone {this.props.data.phone}</td>
         </tr>
      );
   }
}
export default App;