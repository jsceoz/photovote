/**
 * Created by Jsceoz on 2016/11/7.
 */
import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';
import './login.css';


class LoginBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    handleClick = () => {
        this.setState({
            open: true,
        });
    };

    handleActionTouchTap = () => {
        this.setState({
            open: false,
        });
    };



    render() {
        return (
            <div className="login-box-component">
                  <div className="text-wrapper">
                    <TextField
                        hintText="学号"
                        className="login-input"
                    />
                    <TextField
                        hintText="信息门户密码"
                    />
                    <RaisedButton
                        label="开始验证"
                        className="login-raised-btn"
                        primary={true}
                    />
                    <FlatButton
                        label="我就看看，不投票"
                        className="login-flat-btn"
                        primary={true}
                        onClick={this.handleClick}
                    />
                  </div>
                <Snackbar
                    open={this.state.open}
                    message="验证通过"
                    action="哦"
                    onClick={this.handleActionTouchTap}
                />
            </div>
        )
    }
}

export default LoginBox
