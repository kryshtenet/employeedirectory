
import React from 'react';
class App extends React.Component {
    state = {
        data: [ 
            {
                name: "John Smith",
                email:"jsmith@trilogy.com",
                address: "123 south",
                phone:"(800)333-3333"
             },
             {
                name:"Alex Smith",
                email:"asmith@trilogy.com",
                address: "500 lane",
                phone:"(888)222-2222"
             },
             {
                name:"Kelly Snow",
                email:"ksnow@trilogy.com",
                address: "lexington ave",
                phone:"(866)111-1111"
             },
        ],
        searchedData: [],
        search: '',
        address: ''
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;
        const address = event.target.address;
        const email = event.target.email;
        // Updating the input's state
        this.setState(
            { [name]: value }, 
            () => {
                const nameData = this.state.data.filter( 
                    item => item.name.includes( this.state.search ) 
                );
                const newData = this.state.data.filter( 
                    item => item.address.includes( this.state.address ) 
                );
                const emailData = this.state.data.filter( 
                    item => item.email.includes( this.state.email ) 
                );
                this.setState({ searchedData: newData })
            }
        );
    };
    render() {
        return (
            <div>
                <h1>Employees Directory</h1>
                <label>
                    Name  
                </label>
                <input 
                    value={ this.state.search }
                    onChange={ this.handleInputChange }
                    name="search"
                />
                <label>
                    Address
                </label>
                <input
                    value={ this.state.address }
                    onChange={ this.handleInputChange }
                    name="address"
                />
                <label>
                    Email
                </label>
                <input
                    value={ this.state.email }
                    onChange={ this.handleInputChange }
                    name="email"
                />
                { this.state.searchedData.map( 
                    item => (
                        <div>
                            <h3> { item.name }</h3>
                            <h3> { item.email }</h3>
                            <h3> { item.address }</h3>
                        </div> 
                    )
                ) }
            </div>
        );
    }
}
export default App;