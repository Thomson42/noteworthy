import React from 'react';
import { connect } from 'react-redux';
import Editor from './containers/Editor';

export function Note({title, contents}) {
    return(
        <div>
            <span role="img">📝</span>
            <section>
                <span>{title}</span>,
                <span>{contents}</span>!
            </section>
            <section>
                <Editor />
            </section>
        </div>
    );
}