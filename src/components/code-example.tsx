import React from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import '../../prism-language-otter';

export default function CodeExample({ source }: { source: string }) {
    return (
        <Highlight
            theme={themes.gruvboxMaterialDark}
            code={source}
            language="otter">
            {({ style, tokens, getLineProps, getTokenProps }) => (
                <pre className="text--left" style={style}>
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line })}>
                            {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    );
}