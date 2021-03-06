import React from 'react';
import {Div, Button} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import ApiConnector from "../services/apiConnector";

class SubscribeButton extends React.Component {
    constructor (props) {
        super(props);
        this.state = this.props.subscribed
            ? {on: 'secondary', text: "Отписаться", subscribed: true}
            : {on: 'primary', text: "Подписаться", subscribed: false};
    }

    subscribeToggle = () => {
        if (!this.state.subscribed) {
            this.setState({on: 'secondary', text: 'Отписаться', subscribed: true})
            ApiConnector.addSubscriber(this.props.user_id, this.props.friend_id).then();
        } else {
            this.setState({on: 'primary', text: 'Подписаться', subscribed: false})
            ApiConnector.removeSubscriber(this.props.user_id, this.props.friend_id).then();
        }
    }

    render () {
        return (
                <Div >
                    <Button mode={this.state.on} onClick={this.subscribeToggle}>{this.state.text}</Button>
                </Div>
        )
    }
}
export default SubscribeButton