import React from "react";
import { Form, Icon } from "react-bulma-components";

import * as fa from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AsteriskError = ({message}) => {
    return (
        <Form.Help color="danger">
            <Icon align="left" size="small">
                <FontAwesomeIcon className="" size="sm" icon={fa.faAsterisk} /> 
            </Icon>

            <>{message}</>
        </Form.Help>
    );
}