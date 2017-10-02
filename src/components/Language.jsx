import React, { Component } from 'react';

class Language extends Component {

    render() {
        return (
            <select name="langtype" className="app__langselect" onChange={(e)=>this.props.onInput(e)}>
                <option value="javascript">JavaScript</option>
                <option value="bat">bat</option>
                <option value="coffee script">coffee script</option>
                <option value="cpp">cpp</option>
                <option value="csharp">csharp</option>
                <option value="fsharp">fsharp</option>
                <option value="go">go</option>
                <option value="handlebars">handlebars</option>
                <option value="html">html</option>
                <option value="ini">ini</option>
                <option value="lua">lua</option>
                <option value="objective-c">objective-c</option>
                <option value="postiats">postiats</option>
                <option value="php">php</option>
                <option value="powershell">powershell</option>
                <option value="pug">pug</option>
                <option value="python">python</option>
                <option value="r">r</option>
                <option value="razor">razor</option>
                <option value="ruby">ruby</option>
                <option value="sql">sql</option>
                <option value="swift">swift</option>
                <option value="vb">vb</option>
                <option value="xml">xml</option>
                <option value="css">css</option>
                <option value="less">less</option>
                <option value="scss">scss</option>
            </select>
        );
    }
}

export default Language;