import React from 'react';
import Heading from '@theme/Heading';
import CodeExample from '../components/code-example';
import fibonacciExample from '!!raw-loader!../examples/fibonacci.ot';
import ffiExample from '!!raw-loader!../examples/ffi.ot';
import errorsExample from '!!raw-loader!../examples/errors.ot';
import '../../prism-language-otter';

export default function HomepageFeatures() {
    return (
        <main className="container margin-top--lg">
            <div className="row">
                <div className="col col--6 padding--md">
                    <CodeExample source={fibonacciExample} />
                </div>
                <div className="col col--6 padding--md">
                    <Heading as="h2">
                        Simple syntax
                    </Heading>
                    <p>
                        Otter uses a clean and simple syntax, inspired by Python.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col col--6 padding--md">
                    <CodeExample source={ffiExample} />
                </div>
                <div className="col col--6 padding--md">
                    <Heading as="h2">
                        Transparent Rust FFI
                    </Heading>
                    <p>
                        Otter provides seamless integration with Rust through its transparent Rust FFI.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col col--6 padding--md">
                    <CodeExample source={errorsExample} />
                </div>
                <div className="col col--6 padding--md">
                    <Heading as="h2">
                        Compiled and statically typed
                    </Heading>
                    <p>
                        Otter is compiled and statically typed, providing performance and safety.
                    </p>
                </div>
            </div>
        </main>
    );
}