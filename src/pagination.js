import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Pagination extends Component {
    static propTypes = {
        count: PropTypes.number.isRequired,
        type: PropTypes.string,
        onClick: PropTypes.func,

    }
    render() {
        return (
            <div>
                <NavigatorButton onClick= { () => {this.handleChange('Prev')} }>Prev</NavigatorButton>
                {
                    [...Array(this.props.count)].map((e,i) => (
                        <NavigatorButton key={i} onClick= { ()=> {this.handleChange(`pagenumber_${i}`)}}>{i}</NavigatorButton>
                    ))
                }
                <NavigatorButton onClick= { ()=> {this.handleChange('Next')} }>Next</NavigatorButton>
                </div>
        )
    }
    handleChange = (action) => {
        this.props.onClick(action);
    }
}

export const NavigatorButton = ({children, onClick, action, className }) => (<a href="#" 
onClick={ onClick }>{ children }</a>);
export default Pagination;