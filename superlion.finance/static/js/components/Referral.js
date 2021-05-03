import React, {
    Component
} from 'react'
import Calculator from '../img/calculator.svg'
import PoolBox from "./PoolBox";
import {
    toast
} from "react-toastify";

class Referral extends Component {

    render() {

        let account = this.props.account;

        let earnRecommendingContent = < button
        className = "btn btn-primary"
        onClick = {
                (event => {
                    event.preventDefault();
                    this.props.connectWalletConnect(true);
                })
            } >
            Connect Wallet <
            /button>;

        if (account !== '0x0') {
            let referralUrl = this.props.defiUrl + '?ref=' + account;
            earnRecommendingContent = <
                a
            href = "javascript:void(0);"
            onClick = {
                    (event => {
                        event.preventDefault();
                        navigator.clipboard.writeText(referralUrl)
                        toast('URL copied', {
                            autoClose: 5000,
                        });
                    })
                } >
                {
                    referralUrl
                } < /a>;
        }

        return ( <
            div className = "row rowReferral" >
            <
            div className = "col-12 text-center colReferral" >
            <
            h1 id = "earnRecommendingTitle" > Earn {
                this.props.ourTokenName
            }
            's recommending {this.props.defiName}!</h1> <
            div className = "earnRecommendingContent" > {
                earnRecommendingContent
            } <
            /div> <
            div className = "earnRecommendingFooter" >
            <
            small > We will automatically send you {
                this.props.ourTokenName
            }
            directly to your wallet, every time a user recommended by you, makes harvests or withdraws from our Farms or Pools. < /small> <
            /div> <
            /div> <
            /div>
        );
    }
}

export default Referral;