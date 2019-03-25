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

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const li = list.map((el, index) => (<Person key={index} element={el} />));
        return (
            <ul>
                {li}
            </ul>
        );

    }
}

class Person extends React.Component {

    render() {
        return (
            <React.Fragment>
                <li>{this.props.element.firstname} {this.props.element.lastname[0]}.</li>
                <button>Usuń</button>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<List />, document.getElementById('root'));