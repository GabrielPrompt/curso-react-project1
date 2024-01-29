import { Component } from "react";
import './styles.css'

export class Button extends Component {
    render() {
        const { text, onclick, disabled } = this.props

        return (
            <div className="btn">
                <button disabled={disabled} onClick={onclick}>
                    {text}
                </button>
            </div>
        )
    }
}

