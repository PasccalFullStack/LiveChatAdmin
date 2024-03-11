import React from 'react';

export default function OperatorSimulator(props) {

    const changeActifOperator = () => {
        let name = document.querySelector('#actifOperator').value;
        if (name !== "Operator choice") {
            props.setShowActifOperator({
                display: true,
                id: name.substr(0, name.indexOf(" / ")),
                pseudo: name.substr(name.indexOf(" / ") + 3, name.indexOf(" - ") - 4),
                operatorName: name.substr(name.indexOf(" - ") + 3),
            });
        } else {
            props.setShowActifOperator({
                display: false,
                id: 0,
                pseudo: '',
                operatorName: '',
            });
        }
    };
    
    return (
        <div className="showOperator">
            {props.showActifOperator.display && (
                <p>{props.showActifOperator.operatorName}</p>
            )}
            <select
                className="operatorChoiceSelector"
                id="actifOperator"
                onChange={() => changeActifOperator()}
                style={{textAlign: 'center'}}>
                <option key={"operatorChoice"}>Operator choice</option>
                {props.operatorList.length > 0
                    && props.operatorList.map((operator, index) => (
                    <option
                        key={"operator" + index}
                        value={operator.id + " / "
                            + operator.operator_pseudo + " - " +
                            operator.operator_firstname + " " +
                            operator.operator_lastname}>
                        {operator.operator_pseudo}
                    </option>
                ))}
            </select>
        </div>
    )
}