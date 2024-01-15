import { html } from "common-tags";
import { Consumer } from "./Context";

const renderSnippet = (
  snippet: string,
  tabtrigger: string,
  description: string,
) => {
  // prettier-ignore
  return html`
    '${description}':
      'prefix': '${tabtrigger}'
      'body': """
        ${snippet}
      """
  `;
};

const Atom = () => (
  <Consumer>
    {(context) => (
      <pre className="app__pre">
        {renderSnippet(
          context!.state.snippet,
          context!.state.tabTrigger,
          context!.state.description,
        )}
      </pre>
    )}
  </Consumer>
);

export default Atom;
