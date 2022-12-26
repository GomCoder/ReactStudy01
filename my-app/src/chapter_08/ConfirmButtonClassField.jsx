import React from "react";

class ConfirmButtonClassField extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isConfirmed: false
        };

        this.handleConfirm = this.handleConfirm.bind(this);
    }

    // handleConfirm() {
    //     this.setState((prevState) => ({
    //         isConfirmed: !prevState.isConfirmed
    //     }));
    // }

    //클래스 필드 문법 사용
    handleConfirm = () => {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }));
    }


    render() {
        return (
            <button 
                onClick={this.handleConfirm}
                disabled={this.state.isConfirmed}
                >
                    {this.state.isConfirmed ? "확인됨" : "확인하기"}
                </button>
        );
    }
}

export default ConfirmButtonClassField;