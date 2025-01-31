// copied and adapted from https://github.com/InseeFrLab/keycloakify/blob/main/src/lib/pages/Error.tsx
import React from "react";
import type { PageProps } from "keycloakify"
import type { KcContext } from "../kcContext";
import type { I18n } from "../i18n";


export default function Error(props: PageProps<Extract<KcContext, { pageId: "error.ftl" }>, I18n>) {
    const { kcContext, i18n, doFetchDefaultThemeResources = true, Template, ...kcProps } = props;

    const { message, client } = kcContext;

    const { msg } = i18n;

    return (
        <Template
            {...{ kcContext, i18n, doFetchDefaultThemeResources, ...kcProps }}
            displayMessage={false}
            headerNode={msg("errorTitle")}
            formNode={
                <div id="kc-error-message">
                    <p className="instruction">{message.summary}</p>
                    {client !== undefined && client.baseUrl !== undefined && (
                        <p>
                            <a id="backToApplication" href={client.baseUrl}>
                                {msg("backToApplication")}
                            </a>
                        </p>
                    )}
                </div>
            }
        />
    );
}