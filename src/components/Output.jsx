import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VSCode from './VSCode';
import SublimeText from './SublimeText';
import Atom from './Atom';
import Clipboard from 'clipboard';

class Output extends Component {
  constructor() {
    super();
    this.renderSnippet = this.renderSnippet.bind(this);
  }

  renderSnippet() {
    if (this.props.mode === 'vscode') {
      return <VSCode snippet={this.props.snippet} description={this.props.description} tabtrigger={this.props.tabtrigger} />;
    }
    else if (this.props.mode === 'sublimetext') {
      return <SublimeText snippet={this.props.snippet} description={this.props.description} tabtrigger={this.props.tabtrigger} />;
    }
    else if (this.props.mode === 'atom') {
      return <Atom snippet={this.props.snippet} description={this.props.description} tabtrigger={this.props.tabtrigger} />;
    }
    return null;
  }

  componentDidMount() {
    new Clipboard('.app__copy');
  }

  render() {
    return (
      <div className="app__half">

        <div className="app__halftop">
          <button className={this.props.mode === 'vscode' ? 'app__button app__button--vscode app__button--active' : 'app__button app__button--vscode'} onClick={() => this.props.updatemode('vscode')}>VSCode</button>
          <button className={this.props.mode === 'sublimetext' ? 'app__button app__button--sublimetext app__button--active' : 'app__button app__button--sublimetext'} onClick={() => this.props.updatemode('sublimetext')}>Sublime Text</button>
          <button className={this.props.mode === 'atom' ? 'app__button app__button--atom app__button--active' : 'app__button app__button--atom'} onClick={() => this.props.updatemode('atom')}>Atom</button>
        </div>

        <div className="app__halfbottom">
          {this.renderSnippet()}
          {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quia atque aspernatur laudantium. Et obcaecati exercitationem hic quisquam veritatis magni nihil, cum vitae delectus reiciendis maiores, expedita eligendi atque at distinctio veniam esse quod accusantium aliquam tenetur! Quae deleniti excepturi ducimus dolor necessitatibus repellendus, animi provident iste architecto possimus nostrum dicta omnis consequuntur ipsa? Dicta cupiditate harum, fuga, quisquam, atque voluptates aspernatur a saepe esse reprehenderit ab! Velit veniam blanditiis corrupti. Ipsam non itaque voluptatum, molestiae, inventore explicabo, accusamus cum ea rerum vitae iure hic minima? Accusamus sunt provident maxime sit dolore dolores facere cupiditate saepe neque delectus quod ad numquam, ipsam quasi! Impedit nam fugit ipsa officia, voluptas numquam doloribus similique atque quia expedita, excepturi illo commodi, deleniti cupiditate aut nihil iste. Natus voluptatem quo iusto soluta, sequi iste dolores obcaecati eaque aliquid perspiciatis rem? Repellendus, assumenda delectus mollitia saepe beatae ad, labore porro aliquam corrupti alias amet culpa sed quam numquam aspernatur modi error molestias. Necessitatibus aliquam explicabo ratione cum quam placeat accusamus totam minima nulla ullam eum, maxime tenetur praesentium, suscipit vel quidem animi quisquam quaerat sit neque repellendus eos debitis consectetur? Ducimus itaque expedita exercitationem nulla atque illum facere asperiores in repellendus esse rerum magni, optio odio quam ab eligendi velit accusantium deserunt voluptates sed! Facilis, fugiat nam! Suscipit dolore, cumque aut voluptatibus exercitationem doloremque repellendus. Numquam doloremque dolore vero laudantium facilis, nisi nulla perferendis porro nam accusamus non pariatur dignissimos consectetur cumque ducimus quae aliquam iure similique voluptatum aut deleniti, ut dolorem. Corrupti quisquam, ducimus reiciendis quo quasi possimus consequuntur ipsam amet, explicabo debitis quae eum illum? Deleniti totam fugit expedita magnam laudantium? Amet eius quis eligendi ea voluptas sapiente accusantium expedita ipsa dignissimos fugit quidem cumque magnam consequuntur maxime, iste impedit dolore iusto molestias harum ad quod tenetur quo? Perspiciatis, obcaecati deserunt. Deserunt maiores nisi quibusdam laboriosam id illum corrupti totam quisquam sed vel voluptatem, architecto officiis quod repudiandae autem. Repellat, pariatur! Ut in hic consequatur inventore culpa commodi corporis illo officiis numquam error cum corrupti, tempore tenetur aut sed eaque ducimus doloremque expedita suscipit nam reiciendis quisquam ipsam. Harum, ad inventore explicabo deserunt omnis voluptatibus! Est quidem deserunt beatae laboriosam, officiis, ipsum corporis architecto dicta autem incidunt error blanditiis, dolores itaque. Alias vitae quas itaque architecto reiciendis officia corrupti, voluptate quae aliquam assumenda? Culpa quidem non assumenda, tempora eum, reiciendis maiores accusantium recusandae harum placeat sit itaque cupiditate nulla, velit distinctio praesentium consequuntur temporibus sapiente necessitatibus suscipit. Quod, iusto! In at eveniet modi dolore odio, quas earum? Tempora vel, reiciendis odit at et eligendi amet error saepe libero deserunt dignissimos dolorem explicabo, blanditiis minus nostrum consectetur voluptas, magni fugit a repellat vitae sit aspernatur inventore. Reprehenderit, aperiam totam earum libero excepturi nemo labore deserunt sed rerum quis doloremque nihil accusantium nostrum iste ut maxime vero sapiente. Ea, voluptatem est. Architecto ab nulla, aut pariatur ullam, natus libero quia, asperiores accusamus cupiditate harum dolorum aliquid eaque culpa exercitationem nesciunt? Perspiciatis recusandae voluptatibus sapiente magnam. Qui velit voluptatem, placeat blanditiis alias dignissimos natus! Earum laboriosam dolorem animi molestias saepe hic labore, tempore alias amet architecto atque facilis recusandae non quis veritatis. Sapiente quasi vero officia dolores eius inventore, ad pariatur repellendus ea odio modi placeat delectus mollitia harum labore rem numquam similique neque impedit. Obcaecati quis totam ea iusto explicabo, ad, cupiditate veritatis corrupti ipsa magni nihil at consequuntur omnis unde est assumenda voluptates, magnam sequi labore? Totam blanditiis expedita nisi non necessitatibus neque, itaque nihil a ab perferendis, dicta consectetur quidem at velit rem numquam ipsum reiciendis, id dolorum est molestiae. Dignissimos iure quis illum ea! Beatae, adipisci inventore alias, animi blanditiis iste atque voluptate necessitatibus hic quaerat voluptates eligendi molestias distinctio at reprehenderit! Enim dolore obcaecati adipisci asperiores placeat officia magni corporis. At veritatis beatae velit voluptatibus omnis, architecto ipsam iusto fugiat esse explicabo, cupiditate ullam amet. Dolorum, hic, consectetur doloremque inventore doloribus culpa provident impedit illum cumque, magni neque. Dolorem neque iure asperiores, officia hic minima obcaecati nulla temporibus libero deleniti aliquid dignissimos. Hic, nisi ipsum! Exercitationem velit error porro autem ut placeat odio pariatur magni officiis maxime assumenda, laudantium ducimus rem harum, illum odit optio quia eum saepe adipisci impedit distinctio tempora officia! Doloremque numquam recusandae quas mollitia? Officia libero autem dolores nemo nulla at ad perspiciatis voluptatem repudiandae minus nam numquam praesentium, culpa fugit? Tempora nihil eos quisquam nemo suscipit porro iste assumenda dignissimos excepturi, modi tempore perferendis ipsum consequatur consectetur eum, ab ipsa quibusdam quae! Magnam sunt veniam officia natus, error rem incidunt maxime dignissimos ab. Voluptatem similique deleniti ipsa iste, id obcaecati. Magni repudiandae amet neque ea corporis magnam possimus adipisci. Similique quod nisi dignissimos qui blanditiis iure magnam quia, aut minus. Natus deleniti fugiat ab qui quasi. Doloremque expedita repellendus perferendis, incidunt nobis deleniti! Cum, non. Inventore maxime eius doloremque natus neque. Assumenda reiciendis velit repellendus odit aliquid expedita a fuga fugiat deleniti vel! Et officia quos, doloribus hic at blanditiis vitae beatae? Porro ipsa rerum facere consequatur perferendis eius, obcaecati molestias suscipit quia alias aliquid cumque consectetur esse, at vitae! Libero, iusto. Dolores eum dignissimos a ducimus, cupiditate quasi neque, nihil laborum maiores ullam fuga pariatur sed eius voluptatum ut vitae! Ducimus voluptatibus et animi veniam similique corrupti nisi commodi facere repellat, quidem saepe dolorum laborum dolorem natus quis at. Iusto deleniti eius consequuntur aut inventore quam vero temporibus? Veniam minima consequuntur dolorem. Magni beatae exercitationem iusto non consectetur sed praesentium nulla quis dolore asperiores quaerat ab amet, tempora corporis, voluptas, minima dolorem laudantium provident libero? Maiores maxime alias reprehenderit quasi! Asperiores consequatur repellat quisquam nobis repudiandae molestiae voluptas rerum molestias quam cumque ipsum doloremque eligendi nostrum quis dolorum reiciendis quibusdam nihil, soluta quidem natus iste suscipit. Blanditiis ullam, qui tenetur quidem, quibusdam, ab ex culpa nulla inventore minima quisquam nobis repellat! Laudantium, mollitia saepe sunt facere odit laborum doloremque laboriosam consequatur expedita quisquam debitis. Cupiditate at eveniet voluptatibus fuga consequatur quaerat possimus quae accusamus necessitatibus non, reprehenderit nam veritatis vel. Non quod quasi aut. Ipsam, repellendus inventore tenetur eaque veniam rerum nobis molestiae fugit mollitia!</p> */}

          <button className="app__copy" data-clipboard-target=".app__pre">Copy snippet</button>
        </div>
      </div>
    );
  }
}

Output.propTypes = {
  mode: PropTypes.string.isRequired,
  snippet: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tabtrigger: PropTypes.string.isRequired,
  updatemode: PropTypes.func.isRequired,
};

export default Output;
