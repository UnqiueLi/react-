import React, { Component } from 'react';
import propTypes from 'prop-types'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: props.initialage,
            status: 0,
            homeLink: 'changed Link'
        }
        // this.age = this.props.age;
    }
    onMakeOlder() {
        // this.age += 3;
        this.setState({
            age: this.state.age + 3,
            status: this.state.status + 1
        })
        // console.log(this.age)
    }
    handleGreet() {
        this.props.greet(this.state.age)
    }
    onChangeLink() {
        this.props.changeLink(this.state.homeLink)
    }
    render() {
        console.log(this.props)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-1 col-xs-offset-11">
                        <h1>Welcome to Home</h1>
                        <div>your name {this.props.name}, your age {this.state.age}</div>
                        {/* onClick={this.onMakeOlder.bind(this)} */}
                        <button className="btn btn-primary" onClick={() => { this.onMakeOlder() }} > Make me older</button>
                        <div>
                            <h4>hobbies</h4>
                            <ul>
                                {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                            </ul>
                        </div>
                        <div>{this.props.children}</div>
                        <div>
                            Status:{this.state.status}
                        </div>
                        <br />
                        <button className="btn btn-primary" onClick={this.handleGreet.bind(this)} >Greet</button>
                        <hr />
                        <button className="btn btn-primary" onClick={this.onChangeLink.bind(this)}>link</button>
                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    user: propTypes.object,
    children: propTypes.element.isRequired,
    greet: propTypes.string,
};
export default Home;
