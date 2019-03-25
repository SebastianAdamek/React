const list = [
    {
        firstname: "Jan",
        lastname: "Kowalski"
    },
    {
        firstname: "Piotr",
        lastname: "Cezary"
    },
    {
        firstname: "Marysia",
        lastname: "Wawer"
    },
    {
        firstname: "John",
        lastname: "Strauss"
    }
];
const listacopia = [...list];
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            li: listacopia.map((el, index) => (<Person onClick={this.handleOnClick} key={index} element={el} index={index} />))
        }
    }

    handleOnClick = (index) => {
        listacopia.splice(index, 1);
        this.setState((prevState) => {
            return ({
                li: listacopia.map((el, index) => (<Person onClick={this.handleOnClick} key={index} element={el} index={index} />))
            });
        });
    }

    render() {
        return (
            <ul>
                {this.state.li}
            </ul>
        );

    }
}

class Person extends React.Component {

    render() {
        return (
            <React.Fragment>
                <li>{this.props.index} {this.props.element.firstname} {this.props.element.lastname[0]}. <button onClick={() => this.props.onClick(this.props.index)}>Usuń</button></li>

            </React.Fragment>
        );
    }
}

ReactDOM.render(<List />, document.getElementById('root'));