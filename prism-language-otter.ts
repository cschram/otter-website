import { Prism } from 'prism-react-renderer';

Prism.languages.otter = {
    'comment': {
        pattern: /(^|[^\\])#.*/,
        lookbehind: true,
        greedy: true,
    },
    // 'string-interpolation': {
    //     pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    //     greedy: true,
    //     inside: {
    //         'interpolation': {
    //             // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
    //             pattern:
    //                 /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
    //             lookbehind: true,
    //             inside: {
    //                 'format-spec': {
    //                     pattern: /(:)[^:(){}]+(?=\}$)/,
    //                     lookbehind: true,
    //                 },
    //                 'conversion-option': {
    //                     pattern: /![sra](?=[:}]$)/,
    //                     alias: 'punctuation',
    //                 },
    //                 $rest: 'python',
    //             },
    //         },
    //         'string': /[\s\S]+/,
    //     },
    // },
    // 'triple-quoted-string': {
    //     pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
    //     greedy: true,
    //     alias: 'string',
    // },
    'string': {
        pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
        greedy: true,
    },
    'function': {
        pattern: /((?:^|\s)fn[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
        lookbehind: true,
    },
    // 'class-name': {
    //     pattern: /(\bclass\s+)\w+/i,
    //     lookbehind: true,
    // },
    // 'decorator': {
    //     pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
    //     lookbehind: true,
    //     alias: ['annotation', 'punctuation'],
    //     inside: {
    //         'punctuation': /\./,
    //     },
    // },
    'keyword':
        /\b(?:_(?=\s*:)|fn|let|return|if|else|elif|for|while|break|continue|pass|in|is|not|use|as|pub|async|await|spawn|match|case|struct|enum|and|or)\b/,
    'builtin':
        /\b(?:str|int|float|i32|i64|f32|f64|bool|unit)\b/,
    'boolean': /\b(?:true|false)\b/,
    'number':
        /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
    'operator': /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
    'punctuation': /[{}[\];(),.:]/,
};