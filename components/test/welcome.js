

export default class Welcome extends React.Component {
    onClick() {
        this.props.someFunction(this.props.username);
    }

    render() {
        return (
            <div>
                <span onClick={this.onClick.bind(this)}>Wellcome {this.props.username}</span>
            </div>
        );
    }
}